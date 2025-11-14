import { UserCrontroller } from "../controller/users.controller.js";
import { Router } from "express";

const UserRoute = () => {

  const router = Router();
  const userController = UserCrontroller();

  router.post("/", userController.createUser);

  return router;
}

export { UserRoute };