const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 3030;
const products = [
  {
    id: 1,
    name: "Dog Food",
    price: 24.99,
  },
  {
    id: 2,
    name: "Cat Food",
    price: 9.99,
  },
  {
    id: 3,
    name: "Bird Food",
    price: 4.99,
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
