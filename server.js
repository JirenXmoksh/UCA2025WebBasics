const express = require('express')
const app = express();
const port = 8080;
const path = require('path')

app.use(express.static('public')) // if any request for file, see in public folder
const pagePath = path.join(__dirname, 'frontend', 'index.html')

app.get('/home', (req, res) => {
    console.log("home page");
    res.sendFile(pagePath);
})

app.listen(port, () => {
    console.log("Server running on port " + port);  
})