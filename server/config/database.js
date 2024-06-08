const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () =>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() =>{
        console.log("Database Connected successfully")
    })
    .catch((err) =>{
        console.log("DB Connection Error_?");
        console.error(err);
        process.exit(1);
    })
};
