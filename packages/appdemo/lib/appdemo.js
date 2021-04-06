'use strict';

const userlogin  = require("userlogin")

module.exports = appdemo;

function appdemo() {
   userlogin()
   console.log("appdemo",`${Date()}`)
}
appdemo()