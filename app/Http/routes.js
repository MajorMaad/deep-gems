'use strict';

const express = require('express');
let Route = express.Router();

const PostController = require('./Controllers/PostController');

// Routes
Route.get('/posts', PostController.getAll);
Route.post('/posts', PostController.save);

module.exports = Route;
