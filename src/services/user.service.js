import { prisma } from "../models/prismaClient.js";
import { MESSAGES } from "../utils/messages.utils.js";
import ConflictException from "../exceptions/conflict.exception.js";
import { hash } from "bcrypt";

const UserService = () => {
	const createUser = async (userData) => {
		const { email } = userData;
		const userExists = await findUserByEmail(email);

		if (userExists) {
			throw new ConflictException(MESSAGES.USER.ALREADY_EXISTS);
		}

		const { password } = userData;
		const hashedPassword = await hash(password, 10);

		const newUser = await prisma.user.create({
			data: { ...userData, password: hashedPassword },
		});

		return {
			id: newUser.id,
			email: newUser.email,
			name: newUser.name,
			createdAt: newUser.createdAt,
			updatedAt: newUser.updatedAt,
		};
	};

	const findUserByEmail = async (email) => {
		return await prisma.user.findUnique({
			where: { email },
		});
	};

	return {
		createUser,
	};
};

export { UserService };
