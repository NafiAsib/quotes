const express = require("express");

const app = express();
const port = 3001;

app.get("/anime", (req, res) => {
  res.json({
    quote:
      "I am the hope of the universe. I am the answer to all living things that cry out for peace. I am protector of the innocent. I am the light in the darkness. I am truth. Ally to good! Nightmare to you! - Son Goku",
  });
});

app.get("/programming", (req, res) => {
  res.json({
    quote: "The best way to predict the future is to invent it. - Alan Kay",
  });
});

app.listen(port, () => {
  console.log(`Running app on port ${port}`);
});
