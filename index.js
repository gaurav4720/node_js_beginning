const express = require("express");
//const users = require("./MOCK_DATA.json")

const userRouter = require("./routes/user");
const connectMongoDb = require("./connection");
const logReqRes = require("./middlewares/index");

const app = express();
const PORT = 3000;
const dbUrl = 'mongodb://127.0.0.1:27017/app_1';

connectMongoDb(dbUrl);

app.use(express.urlencoded({ extended: false }));

//middlewares
app.use(logReqRes("log.txt"));

//routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}!`);
});