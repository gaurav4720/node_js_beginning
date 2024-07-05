const mongoose = require("mongoose");

// Connection establishment
async function connectMongoDb(url) {
    return mongoose
        .connect(url)
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.log("Mongo err", err));
}

module.exports = connectMongoDb;