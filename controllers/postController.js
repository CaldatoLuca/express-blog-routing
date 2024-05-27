const path = require("path");
const fs = require("fs");

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
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  const imageUrl = `${baseUrl}/imgs/posts/${requestedPost.image}`;

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
          status: `succes`,
          post: requestedPost,
          image_url: imageUrl,
        });
      },
    });
  } else {
    res.status(404).send(`Post ${slug} non trovato`);
  }
};

//Create
const create = (req, res) => {
  res.format({
    html: () => {
      res.send("<h1>Creazione nuovo Post</h1>");
    },
    default: () => {
      res.status(406).json({
        message: `Richiesta ${req.headers.accept} non supportata`,
        status: 406,
      });
    },
  });
};

//Download
const download = (req, res) => {
  const slug = req.params.slug;
  const requestedPost = posts.find((p) => p.slug === slug);

  if (posts.includes(requestedPost)) {
    const file = requestedPost.image;
    const filePath = path.join(__dirname, `../public/imgs/posts/${file}`);

    if (fs.existsSync(filePath)) {
      res.send("File: " + filePath);
    } else {
      res.status(404).send("File non trovato");
    }
  } else {
    res
      .status(404)
      .send(`Post ${slug} non trovato, impossibile effetuare il download`);
  }
};

module.exports = {
  index,
  show,
  create,
  download,
};
