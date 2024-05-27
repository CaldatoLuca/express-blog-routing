const posts = require("../db");

//Lista dei posts
const index = (req, res) => {
  res.format({
    html: () => {
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
    },
    json: () => {
      res.json({
        posts: posts,
        number: posts.length,
      });
    },
  });
};

//Show del singolo post
const show = (req, res) => {
  const slug = req.params.slug;
  const requestedPost = posts.find((p) => p.slug === slug);

  //Controllo se requstedPost esiste
  if (posts.includes(requestedPost)) {
    res.format({
      html: () => {
        let html = `<h1>Richiesta fatta per post ${slug}</h1>`;
        html += `<h3>${requestedPost.title}</h3>
          <img src="/imgs/posts/${requestedPost.image}" alt="${
          requestedPost.title
        }" width="100">
          <div>${requestedPost.content}</div>
          <h5>${requestedPost.tags.map((t) => `#${t}`).join(" ")}</h5>`;
        res.send(html);
      },
      json: () => {
        res.json({
          richiesta: `Richiesta fatta per post ${slug}`,
          post: requestedPost,
        });
      },
    });
  } else {
    res.status(404).send(`Post ${slug} non trovato`);
  }
};

module.exports = {
  index,
  show,
};
