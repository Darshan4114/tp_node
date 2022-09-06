const express = require("express");
const app = express();

const port = 80;
// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://main--animated-sprinkles-cb6cf7.netlify.app/"
  );

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/", (req, res) => {
  res.send({
    hero: "Social fundraising that actually works for nonprofits",
    blockquote:
      "Proven to increase giving, event participation, and awareness of your cause.",
    orange: "ONLINE SOCIAL FUNDRAISING",
    h2: "Add social to grow your fundraising year round",
    p: "Social AMP (trademark) is a set of features designed to promote sharing.",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
