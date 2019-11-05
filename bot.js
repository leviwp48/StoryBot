var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var stories = require('./stories.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    bot.setPresence({
        game: 
        {name:"you sleep O_O",
          type:3
        }
    });
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
    
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'G':
                bot.sendMessage({
                    to: channelID,
                    message: 'A or B?'
                });
                
            break;
            case 'A':
                bot.sendMessage({
                    to: channelID,
                    message: stories.A.A1
                });
                
            break;
            // Just add any case commands if you want to..
         }
     }
});
bot.on('presence', function(user, userID, status, game, event) { 
    
});

