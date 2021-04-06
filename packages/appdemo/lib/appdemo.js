'use strict';

const userlogin  = require("@dalongrong/userlogintest")

module.exports = appdemo;

async function appdemo() {
   let token = await userlogin()
   return "appdemo",`${Date()}---${token}`
};
(async function(){
 let info = await appdemo()
 console.log(info)
})()

