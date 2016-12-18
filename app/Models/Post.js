const mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model('Post', new Schema({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    validated: {
        type: Boolean,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now
    },

    updated_at: {
        type: Date,
        default: Date.now
    }
}));
