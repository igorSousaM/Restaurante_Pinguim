export function notFoundError() {
	return {
		type: "error_not_found",
		message: `Could not find !`
	};
} 

export function unauthorizedError() {
	return {
		type: "unauthorized_attempt",
		message: `Could not find !`
	};
} 