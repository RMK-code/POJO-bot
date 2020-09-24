module.exports = {
	name: 'ping',
	description: 'Ping!',
	args: false,
	numberOfArguments: 0,
	execute(message, args) {
		message.reply('Pong!');
	},
};