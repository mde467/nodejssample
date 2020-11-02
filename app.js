const express = require("express");
const app = express();

app.get("/", function(req, resp){
  resp.send("Hello from Docker");
});

app.listen(3000, function(){
  console.log("connected");
})
