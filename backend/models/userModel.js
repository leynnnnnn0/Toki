import mongoose from  'mongoose';
import Post from './post.js';
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
}, {timeStamps: true});

export const User = mongoose.model('User', userSchema);