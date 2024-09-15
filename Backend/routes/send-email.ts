import { Router, Request, Response } from "express";
import protectBackendRoute from "../middlewares/protectBackendRoutes";
import nodemailer from "nodemailer";

const router = Router();
const PORT: number = 465;

// Default Route for status
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "200 OK Hello :) , Mail service active" });
});

// Route - 1: Mailing by admin credentials
router.post(
  "/admin",
  protectBackendRoute,
  async (req: Request, res: Response) => {
    // Get the body
    const { fromName = "", toName = "", toEmail, subject, message } = req.body;

    // Get the auth parameters
    const EMAIL = process.env.ADMIN_EMAIL;
    const PASSWORD = process.env.ADMIN_APP_PASSWORD;
    console.log(EMAIL);
    console.log(PASSWORD);
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.in",
      port: PORT,
      secure: true, //Use SSL
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
    });

    // Mail options
    const mailOptions: nodemailer.SendMailOptions = {
      from: `${fromName} <${EMAIL}>`,
      to: `${toName} <${toEmail}>`,
      subject: subject,
      text: message,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Mail sent successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Route - 2: Mailing by Test credentials (Dev mode)
router.post("/test", async (req: Request, res: Response) => {
  // Get the body
  const { fromName = "", toName = "", toEmail, subject, message } = req.body;

  // Get the auth parameters
  const EMAIL = process.env.TEST_EMAIL;
  const PASSWORD = process.env.TEST_APP_PASSWORD;

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.in",
    port: PORT,
    secure: true, //Use SSL
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  // Mail options
  const mailOptions: nodemailer.SendMailOptions = {
    from: `${fromName} <${EMAIL}>`,
    to: `${toName} <${toEmail}>`,
    subject: subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info);
    res.status(200).json({ message: "Mail sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route - 3: Mailing by user credentials
router.post("/user-own", async (req: Request, res: Response) => {
  // Get the body as well as auth credentials
  const {
    fromName = "",
    toName = "",
    toEmail,
    subject,
    message,
    EMAIL,
    PASSWORD,
    host,
  } = req.body;

  // Create Transporter
  const transporter = nodemailer.createTransport({
    host: host,
    port: PORT,
    secure: true,
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  // Mail options
  const mailOptions: nodemailer.SendMailOptions = {
    from: `${fromName} <${EMAIL}>`,
    to: `${toName} <${toEmail}>`,
    subject: subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Mail sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
