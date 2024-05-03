import mongoose from  'mongoose';

const postSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

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
    posts: [postSchema]
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);

const User = mongoose.model('User', userSchema);

export {Post, User};

