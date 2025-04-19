const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.get('/', (req,res) => {
    res.write("Hello World");
    res.end();
})

app.get('/api/users', (req, res) => {
    
});

app.get('/api/users/login', (req, res) => {
    
});

app.get('/api/message', (req, res) => {
    res.json({word: "Testing the connection between front-end and back-end"})
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});  