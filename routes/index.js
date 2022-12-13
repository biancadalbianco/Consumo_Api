var express = require("express");
const cepController = require("../controllers/cepController");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.redirect("cep");
});

router.get("/cep", async (req, res, next) => {
  var cep = null;
  if (req.query.cep != undefined) {
    if (isNaN(req.query.cep)) {
      res.render("index", {
        cep: null,
        erro: "Contem um caracter que não é numero",
      });
    } else {
      if (req.query.cep.length != 8) {
        res.render("index", {
          cep: null,
          erro: "cep digitado de maneira errada",
        });
      } else {
        cep = await cepController.consultaCep(req.query.cep);
        if (cep.data.erro) {
          res.render("index", { cep: null, erro: "cep invalido" });
        }
        res.render("index", { cep: cep.data, erro: null });
      }
    }
  } else {
    res.render("index", { cep: null, erro: null });
  }
});

module.exports = router;
