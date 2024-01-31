class customAPIError extends Error {
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

const creatCustomError = (msg,statusCode) => {
    return new customAPIError(msg,statusCode);
}

export {customAPIError,creatCustomError}