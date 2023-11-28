require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();
const port = 4040;
const getItems = require("./API/getItems");
const getCategories = require("./API/getCategories");
const getSelectedCategory = require("./API/getSelectedCategory");

app.use(express.json());
app.use(cors());

app.use(cors());
app.options("*", cors());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/API/getItems", getItems);
app.use("/API/getCategories", getCategories);
app.use("/API/getSelectedCategory", getSelectedCategory);

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
