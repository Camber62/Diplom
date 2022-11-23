// import TelegramBot from 'node-telegram-bot-api'
const express = require('express')
const cors = require('cors')

const TelegramBot = require('node-telegram-bot-api');
const token = '5742569474:AAFObbHXPRiWMjlpyKbxL-_0reCIuVC-Lyg';

const chatId = -781969682

const bot = new TelegramBot(token, {polling: true});

const app = express()

app.use(cors())
app.use(express.json());

app.get('/ping', function(request, response){
    response.send('pong');
});

app.post('/telegram', function(request, response){
    const html = `
                <b>${request.body.username}</b>
                ${request.body.order}
                ${request.body.clients}
        `

    bot.sendMessage(chatId, html, {
        parse_mode: 'html'
    });

    response.send(request.body);
});

app.listen(8000, function() {
    console.log('Backend server start on 8000 port')
})