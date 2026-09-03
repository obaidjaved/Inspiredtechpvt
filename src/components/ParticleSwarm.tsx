'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SwarmParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const count = 8000;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const target = useMemo(() => new THREE.Vector3(), []);
  const pColor = useMemo(() => new THREE.Color(), []);

  const positions = useMemo(() => {
    const pos: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      pos.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100
        )
      );
    }
    return pos;
  }, []);

  const material = useMemo(
    () => new THREE.MeshBasicMaterial({ color: 0xffffff }),
    []
  );
  const geometry = useMemo(() => new THREE.TetrahedronGeometry(0.25), []);

  const scale = 20;
  const fieldStrength = 1.45;
  const flowSpeed = 1.5;
  const flareIntensity = 30;

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() * flowSpeed;

    for (let i = 0; i < count; i++) {
      const safeCount = count > 0 ? count : 1;
      const n = i / safeCount;
      const t = time;

      let px: number, py: number, pz: number;
      const group = n * 3.0;

      if (group < 1.0) {
        const idx = i;
        const maxIdx = safeCount / 3;
        const normIdx = idx / maxIdx;
        const phi = Math.acos(1 - 2 * normIdx);
        const theta = Math.PI * (1 + Math.sqrt(5)) * idx;
        const surfaceBoil =
          Math.sin(phi * 10 + t * 2) *
          Math.cos(theta * 10 + t * 2.5) *
          (scale * 0.05);
        const r = scale + surfaceBoil;
        px = r * Math.sin(phi) * Math.cos(theta);
        py = r * Math.sin(phi) * Math.sin(theta);
        pz = r * Math.cos(phi);
      } else if (group < 2.0) {
        const localN = group - 1.0;
        const numLines = 50;
        const lineId = Math.floor(localN * numLines);
        const posOnLine = localN * numLines - lineId;
        const flowPos = (posOnLine + t * 0.2) % 1.0;
        const lineAngle = (lineId / numLines) * Math.PI * 2.0;
        const minTheta = 0.1;
        const maxTheta = Math.PI - 0.1;
        const polarAngle = minTheta + flowPos * (maxTheta - minTheta);
        const shellLevel = (lineId % 5) / 5;
        const L = scale * 1.2 + shellLevel * scale * fieldStrength;
        const r = L * Math.pow(Math.sin(polarAngle), 2);
        const finalR = Math.max(r, scale * 1.01);
        px = finalR * Math.sin(polarAngle) * Math.cos(lineAngle);
        pz = finalR * Math.sin(polarAngle) * Math.sin(lineAngle);
        py = finalR * Math.cos(polarAngle);
      } else {
        const localN = group - 2.0;
        const numFlares = 30;
        const flareId = Math.floor(localN * numFlares);
        const posOnFlare = localN * numFlares - flareId;
        const flowPos = (posOnFlare + t * 0.5) % 1.0;
        const angleOffset = (flareId / numFlares) * Math.PI * 2.0;
        const basePhi =
          flareId % 3 === 0 ? 0.1 : flareId % 3 === 1 ? Math.PI - 0.1 : Math.PI / 2;
        const spread = ((flareId % 5) / 5) * 0.5;
        const polarAngle = basePhi + spread * Math.sin(flareId * 13.37);
        const r = scale + flowPos * scale * flareIntensity;
        const wiggleAmount = flowPos * scale * 0.2;
        const wiggleX =
          Math.sin(flowPos * 10 + t * 5 + flareId) * wiggleAmount;
        const wiggleZ =
          Math.cos(flowPos * 10 + t * 5 + flareId) * wiggleAmount;
        px = r * Math.sin(polarAngle) * Math.cos(angleOffset) + wiggleX;
        pz = r * Math.sin(polarAngle) * Math.sin(angleOffset) + wiggleZ;
        py = r * Math.cos(polarAngle);
      }

      const rotY = time * 0.1;
      const cy = Math.cos(rotY);
      const sy = Math.sin(rotY);
      const finalX = px * cy + pz * sy;
      const finalZ = -px * sy + pz * cy;

      target.set(finalX, py, finalZ);

      // Indigo-violet color with white highlights
      const isHighlight = i % 5 === 0;
      if (isHighlight) {
        pColor.setHSL(0.72, 0.7, 0.7); // bright indigo
      } else {
        pColor.setHSL(0.72, 0.5, 0.4 + Math.sin(i * 0.01) * 0.2); // varied indigo
      }

      positions[i].lerp(target, 0.1);
      dummy.position.copy(positions[i]);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, pColor);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return <instancedMesh ref={meshRef} args={[geometry, material, count]} />;
}

function ReducedMotionFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.15), transparent 70%)',
        }}
      />
    </div>
  );
}

export default function ParticleSwarm({
  className = '',
}: {
  className?: string;
}) {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (prefersReduced) {
    return <ReducedMotionFallback />;
  }

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 100], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: false }}
        dpr={[1, 1.5]}
      >
        <fog attach="fog" args={['#000000', 80, 200]} />
        <SwarmParticles />
      </Canvas>
    </div>
  );
}
