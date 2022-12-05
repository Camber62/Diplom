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

    await telegram.sendToPrivateChat(`

<b>Имя: ${req.body.valueName}</b>
<b>Фамилия: ${req.body.valueSurName}</b>
<b>Емайл: ${req.body.valueLastEmail}</b>
<b>Лого: ${req.body.valueLogo}</b>
<b>Оплата: ${req.body.valuePayment}</b>
<b>Доставка: ${req.body.valueDelivery}</b>
<b>Город: ${req.body.valueSity}</b>
<b>Улица: ${req.body.valueStreet}</b>
<b>Товары: ${req.body.basket}.name.toString());</b>
`
)


console.log(req.body)
    res.send()
})




// создать сервер слушать порт
server.listen(8080, function() {
    console.log('Backend server start on 8080 port')
})