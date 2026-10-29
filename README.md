# MQTT Express Demo
- Mock MQTT service locally
- Send messages and listen MQTT topic 

## Installation
```bash
npm install
```
*Start each service in separate terminal*  

Start broker
```bash
node mock-broker.js
```
Note for older Node versions: node --experimental-require-module mock-broker.js  

Start publisher
```bash
node mqtt-publisher.js
```

Start listener 
```bash
npm start
```