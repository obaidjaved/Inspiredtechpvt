# AI

## Mission
Create implementation-ready, token-driven UI guidance for AI that is optimized for consistency, accessibility, and fast delivery across documentation site.

## Brand
- Product/brand: AI
- URL: https://10pearls.com/
- Audience: buyers, teams, and decision-makers
- Product surface: documentation site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Figtree`, `font.family.stack=Figtree, sans-serif`, `font.size.base=20px`, `font.weight.base=400`, `font.lineHeight.base=28px`
- Typography scale: `font.size.xs=12px`, `font.size.sm=14px`, `font.size.md=15px`, `font.size.lg=16px`, `font.size.xl=17px`, `font.size.2xl=18px`, `font.size.3xl=20px`, `font.size.4xl=24px`
- Color palette: `color.text.primary=#ffffff`, `color.text.secondary=#313131`, `color.text.tertiary=#171616`, `color.surface.base=#000000`, `color.surface.muted=#d0d1fb`, `color.surface.strong=#6366f1`
- Spacing scale: `space.1=2px`, `space.2=3px`, `space.3=4px`, `space.4=5px`, `space.5=8px`, `space.6=10px`, `space.7=12px`, `space.8=14px`
- Radius/shadow/motion tokens: `radius.xs=8px`, `radius.sm=50px` | `shadow.1=rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`, `shadow.2=rgb(255, 255, 255) 0px 0px 0px 1px inset` | `motion.duration.instant=150ms`, `motion.duration.fast=200ms`, `motion.duration.normal=220ms`, `motion.duration.slow=250ms`, `motion.duration.slower=300ms`, `motion.duration.step6=500ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (217), buttons (85), lists (39), cards (22), inputs (3), navigation (3).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
