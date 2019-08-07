const Discord = require('discord.js');
const moment = require("moment");  
const fs = require("fs");      
const dateFormat = require('dateformat');
const client = new Discord.Client(); 
const Canvas = require("canvas"); //npm i canvas
const prefix = "+" 
let profile = JSON.parse(fs.readFileSync("profile.json", "utf8"))

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
client.user.setActivity(`+help 🌀`,{type: 'playing'});
});

client.login("token Your Bot Here");  // توكن حقق