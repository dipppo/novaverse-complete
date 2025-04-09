const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let trendingCollections = [
  {
    name: "Pixel Planets",
    image: "https://placehold.co/300x200/space/white?text=Pixel+Planets",
    volume: 120,
  },
  {
    name: "CyberChimps",
    image: "https://placehold.co/300x200/cyber/white?text=CyberChimps",
    volume: 90,
  },
  {
    name: "Nova Dreams",
    image: "https://placehold.co/300x200/purple/white?text=Nova+Dreams",
    volume: 78,
  },
];

app.get("/trending", (req, res) => {
  res.json(trendingCollections);
});

app.post("/mint", (req, res) => {
  const { name, image } = req.body;
  if (name && image) {
    trendingCollections.unshift({ name, image, volume: 0 });
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, error: "Missing fields" });
  }
});

app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));