import jwt from 'jsonwebtoken'
import {createError} from './errors.js'
export const tokenVerification = async (req, res, next) => {
    const token = await req.cookies.token;
    if (!token) {
        return next(
          createError(
            "Token Authentication Error",
            403,
            "Token not found"
          )
        );
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
             return next(
               createError(
                 "Authentication Error",
                 401,
                 "Invalid Token or Unauthorized Access "
               )
             );
        }
        req.user = user;
        next()
    });
}

