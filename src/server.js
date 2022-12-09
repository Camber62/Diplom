const express = require('express')
const cors = require('cors')

const telegram = require('./telegram.js')

const server = express()

server.use(cors())
server.use(express.json());

server.get('/ping', function(request, response){
    response.send('pong');
});

//Создадим обработчик
server.post('/send-order', async (req,res)=>{
    let message = `

<b>Имя:</b> ${req.body.valueName}
<b>Фамилия:</b> ${req.body.valueSurName}
<b>Емайл:</b> ${req.body.valueLastEmail}
<b>Лого:</b> ${req.body.valueLogo}
<b>Оплата:</b> ${req.body.valuePayment}
<b>Доставка:</b> ${req.body.valueDelivery}
<b>Город:</b> ${req.body.valueSity}
<b>Улица:</b> ${req.body.valueStreet}
<b>Товары:</b>
`
    for (let i = 0; i < req.body.basket.length; i++) {
        message += `  ${i + 1}. ${req.body.basket[i].name} \n
        `
    }
    message += `${req.body.valueStreet}`
    await telegram.sendToPrivateChat(message)



console.log(req.body)
    res.send()
})




// создать сервер слушать порт
server.listen(8080, function() {
    console.log('Backend server start on 8080 port')
})