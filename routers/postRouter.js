const express = require("express");

const router = express.Router();

const postController = require("../controllers/postController");

//Pagina lista
router.get("/", postController.index);

//Pagina creazione, prima di slug altrimenti da slug non trovato. toglie dagli if
router.get("/create", postController.create);

//Dettaglio post
router.get("/:slug", postController.show);

//Download
router.get("/:slug/download", postController.download);

module.exports = router;
