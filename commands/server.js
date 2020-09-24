module.exports = {
	name: 'server',
	description: 'Server description',
	args: false,
	numberOfArguments: 0,
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}
            \nTotal members: ${message.guild.memberCount}`);
	},
};