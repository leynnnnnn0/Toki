import { User, Post } from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js"
import bcyrpt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();
import generateToken from "../utils/createToken.js";


const test = asyncHandler(async (req, res) => {
    console.log(req.headers['cookie']);
    res.send("Success")
})


const logout = asyncHandler(async (req,res ) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).send("Logged out");
})

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
            return res.send({message: "incorrect password", access: false});
        }
        generateToken(res, user.username);
        // If password matches, return the user object
        res.status(200).send({
            currentUser: user.username,
            message: "Success",
            access: true
        })
    } catch (error) {
        // Handle any errors that occur during the database query
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


const getPosts = asyncHandler(async (req, res) => {
    const results = await Post.find();
    res.status(200).send(results);
}) 

const createPost = asyncHandler(async (req, res) => {
    const {username, content} = req.body;
    try {
        const result = await User.findOne({username})
        const post = await Post.create({
            author: username,
            content
        });
        result.posts.push(post);
        await result.save();
        res.status(200).send({message: "post addded!"});
    }catch (err) {
        res.send(err.message);
    }    
})

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
         generateToken(res, username);
         
         res.send({
             user: user,
         });
     }catch(err) {
        res.status(500).send(err.message);
     }

});


export {createUser, login, test, logout, createPost, getPosts};