const { Router } = require("express");
const passport = require("passport");
const {
  fetchClothes,
  addCloth,
  deleteCloth,
  requestCloth,
} = require("../controllers/clothes.controller");
const clothesRouter = Router();

// User router for handling requests from clients
clothesRouter.get("/clothes", fetchClothes);
clothesRouter.post(
  "/clothes",
  (req, res, next) => {
    console.log(req.Authorization);
    next();
  },
  addCloth
);
clothesRouter.put("/delete-clothes", deleteCloth);
clothesRouter.post("/request", requestCloth);

module.exports = clothesRouter;

// passport.authenticate("jwt", { session: false }),
