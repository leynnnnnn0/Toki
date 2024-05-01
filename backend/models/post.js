class Post {
    constructor(title, body, author, data, id, likes, dislikes, comments) {
        this._title = title;
        this._body = body;
        this._author = author;
        this._data = data;
        this._id = id;
        this._likes = likes;
        this._dislikes = dislikes;
        this._comments = comments;
    }

    // Getter methods
    get title() {
        return this._title;
    }

    get body() {
        return this._body;
    }

    get author() {
        return this._author;
    }

    get data() {
        return this._data;
    }

    get id() {
        return this._id;
    }

    get likes() {
        return this._likes;
    }

    get dislikes() {
        return this._dislikes;
    }

    get comments() {
        return this._comments;
    }

    // Setter methods
    set title(title) {
        this._title = title;
    }

    set body(body) {
        this._body = body;
    }

    set author(author) {
        this._author = author;
    }

    set data(data) {
        this._data = data;
    }

    set id(id) {
        this._id = id;
    }

    set likes(likes) {
        this._likes = likes;
    }

    set dislikes(dislikes) {
        this._dislikes = dislikes;
    }

    set comments(comments) {
        this._comments = comments;
    }
}

export default Post;