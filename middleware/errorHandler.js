import { customAPIError } from "../errors/custom-error.js";
const errorHandlerMiddleware = (err,req,res,next) => {
    if(err instanceof customAPIError){
        return res.status(err.statusCode).json({error: err.message})
    }
    res.status(500).json({msg: err.message})
}

export default errorHandlerMiddleware;