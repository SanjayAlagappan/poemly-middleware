const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.post("/api", async (req, res) => {
    console.log('/api received');
    const payload = req.body;
    console.log(payload);
   
    
    try {
        const response = await axios.post('https://test-ai.aadarshkannan111.workers.dev/', payload);
        console.log(response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(8000, () => {
  console.log("Server is running on port 5000");
});
