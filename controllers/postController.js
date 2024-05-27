const posts = require("../db");

const index = (req, res) => {
  res.send("Index method posts");
};

module.exports = {
  index,
};
