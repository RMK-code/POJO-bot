const { allowedRoles } = require('../config.json');

module.exports = {
	name: 'iam',
    description: 'iam <@role> changes the current role of a user',
    args: true,
    usage: '<@role>',
	execute(message, args) {
		if (!message.mentions.roles.size) {
            return message.reply('you need to tag a role in order to get it!');
        }
        if (!args.length > 1) {
            return message.channel.send(`Please specify only one <@role> as argument, ${message.author}!`);
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