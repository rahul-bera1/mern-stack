const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

app.use(express.jeson());
app.use(cors());

const port = process.env.PORT;
app.listen(port, () => {
    console.log("server is running port 9999")
});

