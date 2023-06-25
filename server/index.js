//https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Berk's Game Server!" });
});

app.get("/api/games", (req, res) => {
  res.json({
    games: [
      {
        name: "Rollerdrome",
        imageUrl:
          "https://s.yimg.com/os/creatr-uploaded-images/2023-05/725c61d0-fa2e-11ed-9f4f-e05ec454442c",
        url: "https://store.steampowered.com/agecheck/app/1294420/",
      },
      {
        name: "Stray",
        imageUrl:
          "https://s.yimg.com/os/creatr-uploaded-images/2023-05/785b91a0-fa2e-11ed-aff3-7d779f8dd4ed",
        url: "https://store.steampowered.com/app/1332010/Stray/",
      },
      {
        name: "overwatch2",
        imageUrl:
          "https://s.yimg.com/os/creatr-uploaded-images/2023-05/7e91fe10-fa2e-11ed-bef3-f0a2fa3ae316",
        url: "https://overwatch.blizzard.com/en-us/",
      },
      {
        name: "Deathloop",
        imageUrl:
          "https://www.stuff.tv/wp-content/uploads/sites/2/2021/07/8._deathloop_julianna_1.jpg?w=825",
        url: "https://www.stuff.tv/review/deathloop-review/",
      },
    ],
  });
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
