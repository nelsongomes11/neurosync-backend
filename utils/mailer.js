const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "neurosync@ethereal.email",
    pass: "neurosyncdev2204",
  },
});

async function sendReminderEmail(task, user) {
  if (!user.allow_emails) return;

  const mailOptions = {
    from: '"Neurosync" <neurosync@ethereal.email">',
    to: user.email,
    subject: `Reminder: Task "${task.title} is due soon!`,
    text: `Hey choom, just a heads-up that your task ${task.title} is due on ${task.due_date}.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Reminder sent to ${user.username} for task: ${task.title}`);
  } catch (error) {
    console.log("Error sending email:", error);
  }
}

export default sendReminderEmail;
