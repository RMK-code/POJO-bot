const { allowedRoles } = require('../config.json');

module.exports = {
	name: 'iamnot',
    description: 'iamnot <@role> deletes this role for the current user',
    args: true,
    usage: '<@role>',
	execute(message, args) {
		if (!message.mentions.roles.size) {
            return message.reply('you need to tag a role in order to get it!');
        }
        if (!args.length > 1) {
            return message.channel.send(`Please specify only one <@role> as argument, ${message.author}!`);
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