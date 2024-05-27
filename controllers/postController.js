const posts = require("../db");

const index = (req, res) => {
  let html = "<h1>Lista dei Posts - Index</h1> <ul>";

  posts.map(
    (p) =>
      (html += `<li>
  <h3>${p.title}</h3>
  <img src="/imgs/posts/${p.image}" alt="${p.title}" width="100">
  <div>${p.content}</div>
  <h5>${p.tags.map((t) => `#${t}`).join(" ")}</h5>
  </li>`)
  );

  html += "</ul>";

  res.send(html);
};

module.exports = {
  index,
};
