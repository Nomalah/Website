const express = require("express");
const app = express();

app.use("/assets", express.static("../assets"))
app.use("/", express.static("../"))

app.get("/", (req, res) => {
    console.log("Request to homepage")
    res.sendFile("/Users/marian/Desktop/Programming/Nomalah.github.io/index.html");
});

app.get('*', function(req, res){
    res.status(404).sendFile("/Users/marian/Desktop/Programming/Nomalah.github.io/404.html");
  });

app.listen(5000, "localhost", () => {
    console.log("Listening on localhost:5000");
});