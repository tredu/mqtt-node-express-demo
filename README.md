# MQTT Express Demo

This project is a simple Node.js Express server that connects to a public MQTT broker (mqtt://test.mosquitto.org), subscribes to a topic, and logs received MQTT messages. It demonstrates how to integrate MQTT messaging with a web backend using Node.js.

## Features
- Connects to a public MQTT broker
- Subscribes to a topic (default: `test/topic` or use `#` for all topics)
- Logs incoming MQTT messages to the console
- Simple Express web server with a root endpoint
- Example endpoint to send MQTT messages from the browser

## Requirements
- Node.js
- npm
- (Optional) Mosquitto clients for command-line publishing

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```
   The server will run at http://localhost:3000

3. **Demo: Receiving MQTT messages**
   - By default, the server subscribes to `test/topic`.
   - To see all public messages, change the topic in `index.js` to `#`.
   - Any message published to the subscribed topic will be logged in the terminal.
4. **Demo: Sending MQTT messages from the browser**
   - Visit `http://localhost:3000/send` (if the `/send` route is implemented) to publish a test message from the server to the broker.

5. **Demo: Sending MQTT messages from the command line**
   - Install Mosquitto clients (see https://mosquitto.org/download/).
   - Use the following command to send a message:
     ```bash
     mosquitto_pub -h test.mosquitto.org -t test/topic -m "Hello from CLI"
     ```
   - The message will appear in your server logs if subscribed to `test/topic` or `#`.

## Customization
- Change the MQTT topic or broker in `index.js` as needed.
- Add more Express routes or MQTT logic for your use case.

---
This project is for demonstration and educational purposes. Public MQTT brokers are shared and not secure for sensitive data.
