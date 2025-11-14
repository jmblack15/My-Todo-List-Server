import { UserService } from "../services/user.service.js";
import { StatusCodes } from "http-status-codes";
import { MESSAGES } from "../utils/messages.utils.js";
import { successResponse } from "../utils/responseHandler.utils.js";

const UserCrontroller = () => {
	const userService = UserService();

	const createUser = async (req, res, next) => {
		try {
			const createdUser = await userService.createUser(req.body);
			return successResponse(
				res,
				MESSAGES.USER_CREATED_SUCCESSFULLY,
				createdUser,
				StatusCodes.CREATED
			);
		} catch (error) {
			next(error);
		}
	};

	return {
		createUser,
	};
};

export { UserCrontroller };
