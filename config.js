const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "CQsATADA#NeT-4Q1Mmhrg1qYK2uiUv5zUO2lyIDBks8LTicMihK4", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:fpwedYjILKVcmiXkLRJzWqiUzeZdInJl@switchback.proxy.rlwy.net:39273",  //ඔයාගෙ mongoDb url එක
};
 
