export default class BaseException extends Error {
	constructor(message, statusCode, errorCode) {
		super(message);
		this.name = this.constructor.name;
		this.statusCode = statusCode;
		this.errorCode = errorCode;
		Error.captureStackTrace(this, this.constructor);
	}
}
