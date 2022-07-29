const router = require("express").Router();
const {
  models: { Response },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const responses = await Response.findAll({
      // explicitly select only the message and isPositive fields
      attributes: ["message", "isPositive"],
    });
    res.status(200).send(responses);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const response = await Response.findByPk(req.params.id, {
      // explicitly select only the message and isPositive fields
      attributes: ["message", "isPositive"],
    });
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
