'use strict';

const userlogin  = require("@dalongrong/userlogintest")

module.exports = appdemo;

function appdemo() {
   userlogin()
   console.log("appdemo",`${Date()}`)
}
appdemo()