module.exports = {
	name: 'server',
	description: 'Server description',
	args: false,
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}
            \nTotal members: ${message.guild.memberCount}`);
	},
};