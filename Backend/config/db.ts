import mongoose from "mongoose";

export async function connectToDB(): Promise<void> {
  let MONGO_URI: string = "";
  try {
    // Datebase URI
    if (process.env.ENV === "dev") {
      MONGO_URI = process.env.MONGO_TEST_URI as string;
    } else if (process.env.ENV === "production") {
      MONGO_URI = process.env.MONGO_PROD_URI as string;
    }

    // logs
    console.log("Connecting to Mongo DB :|");
    await mongoose.connect(MONGO_URI);
    console.log("Connected to Mongo DB :)");
  } catch (error) {
    console.log("Unable to connect to Mongo DB T_T");
    console.log(error);
  }
}
