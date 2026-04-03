const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["1.1.1.1","8.8.8.8"]);
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://sonalsingh75388_db_user:xZsdu9OT2DPtTDcT@cluster0-shard-00-00.nataqwz.mongodb.net:27017,cluster0-shard-00-01.nataqwz.mongodb.net:27017,cluster0-shard-00-02.nataqwz.mongodb.net:27017/agnosutraDB?ssl=true&replicaSet=atlas-xxxxx-shard-0&authSource=admin&retryWrites=true&w=majority");
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;