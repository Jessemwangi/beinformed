'use strict'
const express = require('express');
const {addPost,getPosts,getPost,deleteData,putPost,updatePost } = require( '../controllers/postController' );
const getTest = require( '../controllers/postgreTestController' );

const router = express.Router()


router.get('/all', getPosts)
router.get('/:id', getPost)
router.post('/', addPost)
router.delete('/:id', deleteData)
router.put('/:id', putPost)
// router.get('/dum/all', dummyget)

router.get('/', getTest)

module.exports = router;