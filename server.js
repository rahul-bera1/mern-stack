const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectdb = require('./config/db');

const app = express();
dotenv.config();
connectdb();

app.use(express.json());
app.use(cors());

const port = process.env.PORT;
app.listen(port, () => {
    console.log("server is running port 9999")
});

app.get("/", (req,res)=> {
    res.send("hallo");
});