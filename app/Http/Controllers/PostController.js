'use strict';

let Post = require('./../../Models/Post');

let PostController = {

    /**
     * Retrieve all the posts
     *
     * @return {Array}  Array containing all posts
     */
    getAll: function(req, res) {
        Post.find(function(err, posts) {
            if (err) res.send(err);

            res.json(posts);
        });
    },

    /**
     * Create a new post
     *
     * @return {Object} post the post created
     */
    save: function(req, res) {
        let post = new Post();
        post.title = req.body.title;
        post.content = req.body.content;
        post.author = req.body.author;
        post.validated = req.body.validated;

        post.save(function(err) {
            if (err) res.send(err);
            res.send(post);
        });
    }

};

module.exports = PostController;
