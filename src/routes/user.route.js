import { UserCrontroller } from "../controller/users.controller.js";
import { createUserSchema } from "../validations/user.schema.validation.js";
import { validateRequestMiddleware } from "../middlewares/validateRequest.middleware.js";
import { Router } from "express";

const UserRoute = () => {

  const router = Router();
  const userController = UserCrontroller();

  router.post("/", validateRequestMiddleware(createUserSchema), userController.createUser);

  return router;
}

export { UserRoute };