const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    hero: "Social fundraising that actually works for nonprofits",
    blockquote:
      "Proven to increase giving, event participation, and awareness of your cause.",
    orange: "ONLINE SOCIAL FUNDRAISING",
    h2: "Add social to grow your fundraising year round",
    p: "Social AMP (trademark) is a set of features designed to promote sharing.",
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
