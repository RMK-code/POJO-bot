const { prefix, allowedRoles } = require('../config.json');

module.exports = {
	name: 'iam',
    description: 'iam <@role> changes the current role',
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

        const userAllowedRoles = message.guild.roles.cache
            .filter(role => allowedRoles.includes(role.name));
        const role = userAllowedRoles.find(role => role.name === message.mentions.roles.first().name);

        if (!role) {
            return message.reply(`not allowed to obtain role ${args[0]}.\n\`Choose one: "${allowedRoles}"\``);
        }

        message.member.roles.remove(userAllowedRoles)
            .then(member => {
                member.roles.add(role)
                    .then(member => {
                        message.reply(`you have been switched to role: ${role}`);
                    })
                    .catch(console.error);
            })
            .catch(console.error);
	},
};