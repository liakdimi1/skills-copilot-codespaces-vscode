// Create web server
const express = require('express');
const router = express.Router();
const comments = require('../models/comments');

router.get('/', (req, res) => {
    comments.retrieveAll((err, comments) => {
        if (err)
            return res.json(err);
        return res.json(comments);
    });
}
);
