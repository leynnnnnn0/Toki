import { User } from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js"
import bcyrpt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    try {
        // Find a user with the provided username
        const user = await User.findOne({ username });
        // If user is not found, return a 404 status code
        if (!user) {
            return res.status(404).send("User not found");
        }
        // This function will return a boolean value 
        const checkHashedPassword = await bcyrpt.compare(password, user.password);
        // Check if the provided password matches the user's password
        if (!checkHashedPassword) {
            return res.status(401).send({message: "incorrect password"});
        }

        // If password matches, return the user object
        res.json({user: user, checkHashedPassword: checkHashedPassword});
    } catch (error) {
        // Handle any errors that occur during the database query
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

const createUser = asyncHandler(async (req, res) => {
    // Destructuring the username, email and password from the body
     const {username, email, password} = req.body;
     if(!username || !email || !password) {
        res.status(400).send("Incomplete details")
        return;
     }
     // Hashing the password before putting it in database
     const hashedPassword = await bcyrpt.hash(password, 10);
     try {
        // Creating a new user using the schema
        const user = await User.create({
            username,
            email,
            password: hashedPassword
         });
         // Sending the response if successful
         const accessToken = jwt.sign(user.email, process.env.SECRET_CODE);
         const refershToken = jwt.sign(user.email, process.env.REFRESH_TOKE);
         res.cookie(accessToken, accessToken, {maxAge: 60000})
         res.cookie(refershToken, refershToken, {maxAge: 300000, httpOnly: true, secure: true, sameSite: 'strict'})
         
         res.send({
             user: user,
         });
     }catch(err) {
        res.status(500).send(err.message);
     }

});


export {createUser, login};