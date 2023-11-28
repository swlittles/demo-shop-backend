const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  const category = req.body.data;

  const url = `https://fakestoreapi.com/products/category/${category}`;

  try {
    const fetchSelectedCategory = await axios.get(url, {
      headers: { "Content-Type": "application/json" },
    });

    res.status(200).json(fetchSelectedCategory.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
