import mongoose from "mongoose";
const DB = process.env.MONGO_URL;

mongoose
  .connect(DB, {
    retryWrites: true,
    socketTimeoutMS: 1000,
    authSource: "admin",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to expense-manager database`);
  })
  .catch((err) => {
    console.log(err);
  });
