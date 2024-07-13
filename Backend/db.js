const mongoose = require("mongoose");
const mongo_port = process.env.MONGO_PORT || "27017";
const mongo_url = process.env.MONGO_URL || "127.0.0.1";
const mongoURI = `mongodb+srv://${mongo_url}:${mongo_port}@prathameshdb.w17fepg.mongodb.net/?retryWrites=true&w=majority&appName=Prathamesh`;

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
