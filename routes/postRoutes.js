const express = require('express');
const { getPosts, addPost, deletePost, updatePost } = require('../controllers/postController');

const router = express.Router();

router.get('/getPosts', getPosts);
router.post('/addPosts', addPost);
router.delete('/delPosts/:id', deletePost);
router.patch('/post/:id', updatePost);

module.exports = router;