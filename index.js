const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const util = require('./util');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    // If the message is not prefixed (for this Bot) OR the message is send by the Bot itself, break
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = util.getArgumentsFromMessage(message);
    const commandName = util.getCommandFromArguments(args);
    
    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);
    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;
        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

client.login(token);
