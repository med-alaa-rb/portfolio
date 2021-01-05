var dbRouter = require("express").Router();
var db = require("./db");

dbRouter.post("/saveUserName", (req, res) => {
  !req.body.el
    ? res.send(null)
    : db.addUserName(req.body.el, (err, data) => {
        if (err) throw err;
        res.send(data);
      });
});

module.exports = dbRouter;
