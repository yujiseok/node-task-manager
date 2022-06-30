import mongoose from "mongoose";

export const connectDB = (url) => {
  return mongoose.connect(url, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
  });
};

export default connectDB;
