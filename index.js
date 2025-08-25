import bodyParser from "body-parser";
import express from "express";
import controllers from "./controller.js";
import KafkaConfig from "./config.js";

const app = express();
const jsonParser = bodyParser.json();

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.post('/api/send', jsonParser, controllers.sendMessageToKafka);

const kconf = new KafkaConfig();
kconf.consume('my-topic', (value) => {
    console.log(value);
});

app.listen(8080, () => {
    console.log("server start on 8080 port...");
});
