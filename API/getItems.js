const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const url = `https://fakestoreapi.com/products?limit=20`;
  const data = req.body;

  try {
    const fetchStoreData = await axios.get(url, data, {
      headers: { "Content-Type": "application/json" },
    });

    console.log(fetchStoreData.data);
    res.status(200).json(fetchStoreData.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
