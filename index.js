const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  console.log(req);
});
app.post("/api", async (req, res) => {
  
    console.log('/api received');
    const payload = req.body;
    const requestBody = {
        "prompt":"about college love",
        "length":"Short",
        "tone": "melancholic",
        "style": "freestyle"
    }
    
    fetch('https://test-ai.aadarshkannan111.workers.dev/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    

});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
