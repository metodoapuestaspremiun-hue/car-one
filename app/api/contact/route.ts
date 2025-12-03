import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email, phone, service, message } = data;

  // Configura el transporte SMTP con Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'automatizotunegocio@gmail.com',
      pass: 'olbp nqci oiak bcjd',
    },
  });

  try {
    await transporter.sendMail({
      from: 'automatizotunegocio@gmail.com',
      to: 'asesor.servicio.carone@gmail.com',
      subject: `Nuevo mensaje de contacto - ${service}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone}
        Servicio: ${service}
        Mensaje: ${message}
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
} 