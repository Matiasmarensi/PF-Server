const { Router } = require("express");
const userRouter = require("./userRouter");
const dishRouter = require("./dishRouter");
const desertRouter = require("./desertRouter");
const dish_sideRouter = require("./dish_sideRouter");
const orderRouter = require("./orderRouter");
const drinkRouter = require("./drinkRouter");
const sideRouter = require("./sideRouter");
const mainRouter = Router();
const desert = require("../Handlers/desert");
const dishes = require("../Handlers/dishes");

mainRouter.use("/orders", orderRouter);
mainRouter.use("/dish_side", dish_sideRouter);
mainRouter.use("/users", userRouter);
mainRouter.use("/side", sideRouter);
mainRouter.use("/drink", drinkRouter);
mainRouter.use("/desert", desert);
mainRouter.use("/dish", dishes);
module.exports = mainRouter;
