// Simple Node.js Express app with MQTT integration
// 1. Install dependencies: npm install express mqtt

const express = require('express');
const mqtt = require('mqtt');

const app = express();
const port = 3000;

// MQTT broker URL (replace with your broker address if needed)
const mqttUrl = 'mqtt://test.mosquitto.org';
const topic = 'test/topic';

// Connect to MQTT broker
const mqttClient = mqtt.connect(mqttUrl);

mqttClient.on('connect', () => {
    console.log('Connected to MQTT broker');
    mqttClient.subscribe(topic, (err) => {
        if (!err) {
            console.log(`Subscribed to topic: ${topic}`);
        }
    });
});

mqttClient.on('message', (topic, message) => {
    // message is a Buffer
    console.log(`Received message on ${topic}: ${message.toString()}`);
});

app.get('/', (req, res) => {
    res.send('Express server is running and listening for MQTT messages.');
});

app.get('/send', (req, res) => {
    const testTopic = 'test/topic'; // or any topic you want
    const testMessage = 'Hello from Express!';
    mqttClient.publish(testTopic, testMessage, () => {
        res.send(`Message sent to ${testTopic}: ${testMessage}`);
    });
});

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});
