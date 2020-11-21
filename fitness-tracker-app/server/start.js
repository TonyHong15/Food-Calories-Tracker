const app = require("./server");
const mongoose = require("mongoose");
const http = require("http");

// cloud URL 
const mongoURL = process.env.MONGODB_URL || "mongodb+srv://jiayangyu:yjjyjy1968@cluster0.un0cr.mongodb.net/food?retryWrites=true&w=majority";
console.log(mongoURL);

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(`Error: ${err}`));

mongoose.set("useFindAndModify", false);
const server = http.createServer(app);
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Listening on port ${port}...`));
