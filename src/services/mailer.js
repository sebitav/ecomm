// src/services/mailer.js
const nodemailer = require('nodemailer');

// Configuración del transporte para enviar correos electrónicos
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Función para enviar un correo electrónico
async function sendEmail(to, subject, body) {
  const mailOptions = {
    from: process.env.SMTP_USERNAME,
    to,
    subject,
    text: body,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado con éxito.');
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
  }
}

module.exports = { sendEmail };
