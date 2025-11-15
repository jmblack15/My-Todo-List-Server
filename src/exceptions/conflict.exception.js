import { StatusCodes } from "http-status-codes";
import BaseException from "./base.exception.js";

export default class ConflictException extends BaseException {
	constructor(message = "Conflict", errorCode = "CONFLICT_ERROR") {
		super(message, StatusCodes.CONFLICT, errorCode);
	}
}
