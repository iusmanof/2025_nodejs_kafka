import KafkaConfig from "./config.js";

const sendMessageToKafka = async (req, res) => {
    try {

        const { message } = req.body
        const kconf = new KafkaConfig()
        const messages = [
            { key: 'key1', value: message }
        ]
        kconf.produce("my-topic", messages);

        res.status(200).json({
            status: "Ok!",
            message: "Message successfully send!"
        })
    } catch (err) {
        console.log(err)
    }

}

const controllers = { sendMessageToKafka };

export default controllers;