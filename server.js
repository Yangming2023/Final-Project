
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); 
app.use(express.static('public')); // This serves your HTML automatically!
let dataStore = [{ name: "Louis", message: "Messages will show up here like this" }];

// GET: Send data from the datastore to the user
app.get('/api/messages', (req, res) => {
    res.json(dataStore);
});

// POST: Take data sent and store it in the datastore
app.post('/api/messages', (req, res) => {
    dataStore.push(req.body);
    res.status(201).send({ message: "Received!" });
});

app.delete('/api/messages/:id', (req, res) => {
    // console.log("bob");
    dataStore.splice(req.params.id, 1);
    res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));

// Reminder: node server.js in terminal to start it running
