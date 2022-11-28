const TelegramBot = require('node-telegram-bot-api')
const dotenv = require('dotenv')
// const {parse} = require("dotenv");

dotenv.config()

const bot = new TelegramBot(process.env.TOKEN, {polling: true});


module.exports = {
    sendToPrivateChat(text) {
        return bot.sendMessage(+process.env.CHAT_ID, text,
            {
                parse_mode: 'HTML'
            }
        )
    }
}
