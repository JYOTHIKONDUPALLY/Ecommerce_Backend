const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;

console.log("url", config.mongoose.url)
mongoose.connect(config.mongoose.url, config.mongoose.options).then(()=>{
    console.log("connected to mongodb");
   app.listen(config.port,()=>{
        console.log(`Listening to port ${config.port}`);
    });
});
