const TelegramBot = require('node-telegram-bot-api');

const token = '5742569474:AAFObbHXPRiWMjlpyKbxL-_0reCIuVC-Lyg';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Otvet');
});

console.log('start')