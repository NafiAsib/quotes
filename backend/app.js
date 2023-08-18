const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors({ origin: "*" }));

const animeQuotes = [
  "I am the hope of the universe. I am the answer to all living things that cry out for peace. I am protector of the innocent. I am the light in the darkness. I am truth. Ally to good! Nightmare to you! - Son Goku",
  "People’s lives don’t end when they die, it ends when they lose faith. - Itachi Uchiha",
  "Forgetting is like a wound. The wound may heal, but it has already left a scar. - Monkey D. Luffy",
  "Whatever you lose, you’ll find it again. But what you throw away you’ll never get back. - Himura Kenshin",
];

const programmingQuotes = [
  "Technology is anything invented after you were born. - Alay Kay",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Ruby is rubbish! PHP is phpantastic! - Nikita Popov",
  "Code is like humor. When you have to explain it, it’s bad.” - Cory House",
  "Java is to JavaScript what car is to Carpet. - Chris Heilmann",
];
app.get("/anime", (req, res) => {
  res.json({
    quote: animeQuotes[Math.floor(Math.random() * animeQuotes.length)],
  });
});

app.get("/programming", (req, res) => {
  res.json({
    quote:
      programmingQuotes[Math.floor(Math.random() * programmingQuotes.length)],
  });
});

app.listen(port, () => {
  console.log(`Running app on port ${port}`);
});
