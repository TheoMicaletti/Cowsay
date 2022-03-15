let userInfo = require('./information');
let cowsay = require("cowsay");

console.log(cowsay.say({
    text : (`I'm ${userInfo.user}, from the WCS of ${userInfo.campus}!`),
    e : "oO",
    T : "U "
}));