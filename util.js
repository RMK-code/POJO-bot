const { prefix } = require('./config.json');

module.exports = {
    getArgumentsFromMessage(msg) {
        return msg.content.slice(prefix.length).trim().split(/ +/);
    },
    getCommandFromArguments(args) {
        return args.shift().toLowerCase();
    }
};