//CREAZIONE APP
const express = require("express");
const app = express();

//Importo il router
const postRouter = require("./routers/postRouter");

//HOME
app.get("/", (req, res) => {
  res.send("Benvenuti nel mio blog");
});

//ROTTE DEI POSTS
app.use("/posts", postRouter);

//ASCOLTO
app.listen(3000, () => {
  console.log(`Server pronto a http://localhost:3000`);
});
