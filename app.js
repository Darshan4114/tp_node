const express = require("express");
const app = express();
var bodyParser = require("body-parser");

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/:id", (req, res) => {
  switch (parseInt(req.params.id)) {
    case 1:
      res.end("Social fundraising that actually works for nonprofits");
      break;
    case 2:
      res.send(
        "Proven to increase giving, event participation, and awareness of your cause."
      );
      break;
    case 3:
      res.send("ONLINE SOCIAL FUNDRAISING");
      break;
    case 4:
      res.send("Add social to grow your fundraising year round");
      break;
    case 5:
      res.send(
        "Social AMPTM is a set of features designed to promote sharing."
      );
      break;

    default:
      break;
  }
});

app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
