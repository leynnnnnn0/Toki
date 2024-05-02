import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

const generateToken = (res, username) => {
    const token = jwt.sign(username, process.env.SECRET_CODE);
    // set jwt ad an http only cookie
    // passing the token as a cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
    })
    return token;
}
export default generateToken;