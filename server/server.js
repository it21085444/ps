const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./dbConnect");
const { config } = require("dotenv");

app.use(cors());
app.use(express.json());

//allows us access environment variables like dotenv files
config();

dbConnect();

app.listen(5000, () => {
    console.log("Server is running on port 5000.");
});