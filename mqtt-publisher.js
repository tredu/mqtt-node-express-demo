const mqtt = require('mqtt');

// Connect to the local broker
const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  setInterval(() => {
    const message = `Hello at ${new Date().toISOString()}`;
    client.publish('anything/something', message);
    console.log('Published:', message);
  }, 10000); // 10 seconds
});