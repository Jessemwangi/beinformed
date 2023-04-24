const express = require('express')
const getTest = require( '../controllers/postgreTestController' );
const { psPool } = require( '../db/dbconnect' );
const router = express.Router()




router.get('/',getTest )

module.exports = router;