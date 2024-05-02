import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from './asyncHandler.js'

const authenticate = asyncHandler(async (req, res, next) => {
    let token;

    // read jwt 
    token = req.cookie.jwt;
    if(token) {
        try {
            const decoded = jwt.verify(token, process.env.SECRET_CODE);
            req.user = await User.findById(decoded.username).select('password');
            next();
        } catch (err) {
            res.status(401);
        throw new Error("NOt authorized, token failed")
        }
    } else {
        res.status(401);
        throw new Error("Not authorized, no token")
    }
})
