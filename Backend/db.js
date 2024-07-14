const mongoose = require("mongoose");
const mongoURI = `mongodb+srv://prathameshtharali:${process.env.MONGO_PASS}@prathameshdb.w17fepg.mongodb.net/test`;

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
