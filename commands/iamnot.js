const { prefix, allowedRoles } = require('../config.json');

module.exports = {
	name: 'iamnot',
    description: 'iamnot <@role> deletes this role for the current user',
    args: true,
    numberOfArguments: 1,
    usage: '<@role>',
	execute(message, args) {
		if (!message.mentions.roles.size) {
            let reply = `You didn't provide correct arguments, ${message.author}!`;
            if (this.usage) {
                reply += `\nThe proper usage would be: \`${prefix}${this.name} ${this.usage}\``;
            }
            return message.channel.send(reply);
        }

        let role = message.member.roles.cache
            .find(role => role.name === message.mentions.roles.first().name);
        if (!role) {
            return message.reply(`you don't even have role ${args[0]} !!\n\`Don't get me wrong, but I have more work to do...\``);
        }
        
        const userAllowedRoles = message.member.roles.cache
            .filter(role => allowedRoles.includes(role.name));
        role = userAllowedRoles.find(role => role.name === message.mentions.roles.first().name);

        if (!role) {
            return message.reply(`you cannot delete role ${args[0]}.\n\`Choose one: "${allowedRoles}"\``);
        }

        message.member.roles.remove(role)
            .then(member => {
                message.reply(`deleted role ${role}`);
            })
            .catch(console.error);
	},
};