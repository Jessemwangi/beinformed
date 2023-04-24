"use strict";

const  {Pool}= require('pg')
const mysql = require("mysql");
const  {Client}  = require("pg");

const {MSQLDbConfigs,PSQLDbConfigs} = require( './dbConfig' );
//   const    = require("./dbConfig");
// const dbConfigs =require('./dbConfig.json')

const msDb = mysql.createConnection(MSQLDbConfigs);


//
//  const psPool = new Pool(PSQLDbConfigs)
 const psDb =  new Client(PSQLDbConfigs)
 const psPool = new Pool({
    connectionString: PSQLDbConfigs,
    ssl: {
        rejectUnauthorized: false
      }
  });


module.exports = {msDb ,psPool,psDb}
