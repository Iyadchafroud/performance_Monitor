const express = require('express')
const app = express();
app.get("/", (req, res) => {
    res.send(' r')
})
app.listen(8000, () => {
    console.log("server in");
})