import bodyParser from "body-parser";
import express from "express";
import controllers from "./ontroller";
import kafkaConfig from "./config";

const app = express()
const jsonParser = bodyParser.json();

app.post('/api/send', jsonParser, controllers.sendMessageToKafka)

const kafkaConfig = new kafkaConfig()
kafkaConfig.consume('my-topic', (value) => {
    console.log(value)
})

app.listen(8080, () => {
    console.log("server stgart on 8080 port...")
})