export const createError = (type,statusCode, message) => {
    const response = {
        type,
        statusCode,
        message
    }
    return response;
}