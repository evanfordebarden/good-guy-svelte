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
    res.json(responses);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
