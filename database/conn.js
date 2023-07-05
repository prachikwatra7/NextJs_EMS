import mongoose from "mongoose";

const connectMongo = async () => {
  const MONGO_URI =
    "mongodb+srv://prachi:passwordprachi@nextjs-ems.8muhlwd.mongodb.net/user?retryWrites=true&w=majority";

  try {
    const { connection } = await mongoose.connect(MONGO_URI);

    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
