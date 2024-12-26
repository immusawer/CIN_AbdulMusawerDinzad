import mongoose from "mongoose";

const localMongoURI = "mongodb://127.0.0.1:27017/Mine";

export const connectDB = async () => {
  try {
    // Simply provide the URI without deprecated options
    await mongoose.connect(localMongoURI);
    console.log("Connected to Local MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if connection fails
  }
};

// Call the function to connect
connectDB();
