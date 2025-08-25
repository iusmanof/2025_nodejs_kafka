import bodyParser from "body-parser";
import express from "express";

const app = express()
const jsonParser = bodyParser.json();

app.listen(8080, () => {
    console.log("server stgart on 8080 port...")
})