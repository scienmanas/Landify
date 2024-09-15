import { Router, Request, Response } from "express";
import Newsletter from "../models/newsletter";
import { newsLetterParams } from "../lib/definitions";

const router = Router();

// Route - 1 : Insert wailist user
router.post("/newsletter-insert-user", async (req: Request, res: Response) => {
  // Get the body
  const email: newsLetterParams = req.body;
  let EMAIL_API: string = "";
  if (process.env.ENV === "dev") {
    EMAIL_API = "http://localhost:5000/api/send-email/test";
  } else if (process.env.ENV === "production") {
    EMAIL_API = process.env.DEPLOYED_URL + '/api/send-email/admin"';
  }

  try {
    // insert dataI
    await Newsletter.create(email);
    res.status(201).json({ message: "Successfully added user to waitlist" });

    // Send the mail
    const emailData = {
      fromName: "Manas",
      toName: "",
      toEmail: email,
      subject: "Subscribed to Landify Newsletter ! !",
      message: `You have sucessfully subscribed to Landify with ${email}. From now you will be receiving the news about updates, blogs, and much more.\n\nBest Regards,\nTeam Landify\n\n(This is an automated generated mail which will be not monitored.)`,
    };

    try {
      await fetch(EMAIL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
