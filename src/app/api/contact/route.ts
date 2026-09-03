import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const serviceLabels: Record<string, string> = {
      'web-development': 'Web Development & Digital Engineering',
      'erpnext': 'ERPNext & ZATCA E-Invoicing Implementation',
      'ai-automation': 'AI Automation & Agentic Workflows',
      'network-security': 'Network Security & Cisco Infrastructure',
      'sla': '24/7 Service Level Agreement (SLA)',
      'cabling': 'Structured Data Cabling & Comms Room',
      'cctv': 'IP CCTV Surveillance Systems',
      'consulting': 'General Technical Consulting',
    };

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Lead from Contact Form</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Full Name:</td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td><td style="padding: 8px 0;">${phone || 'Not provided'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td><td style="padding: 8px 0;">${company || 'Not provided'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Service:</td><td style="padding: 8px 0;">${serviceLabels[service] || service}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #6366f1;">
          <h3 style="margin: 0 0 8px 0; color: #374151;">Project Details:</h3>
          <p style="margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 20px; color: #9ca3af; font-size: 12px;">Submitted from Inspired Technology contact form</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'contact@inspired.com.pk',
      replyTo: email,
      subject: `New Lead: ${name} - ${serviceLabels[service] || service}`,
      text: `New Lead from Contact Form\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nCompany: ${company || 'Not provided'}\nService: ${serviceLabels[service] || service}\n\nProject Details:\n${message}`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
