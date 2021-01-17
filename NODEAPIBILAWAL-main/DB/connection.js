const mongoose = require('mongoose');
var config = require("config");


const connectDB = async ()=>{
    await mongoose.connect(config.get("db"),{ useUnifiedTopology: true, useNewUrlParser: true  });
    console.log("Connection Established");
}

module.exports=connectDB;