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
<ul>
<li><b>Name:</b> ${ req.body.valueName }</li>
<!--<b>${req.body.valueName}</b>-->
<li>${req.body.valueSurName}</li>
<li>${req.body.valueLastEmail}</li>
<li>${req.body.valueLogo}</li>
<li>${req.body.valuePayment}</li>
<li>${req.body.valueDelivery}</li>
<li>${req.body.valueSity}</li>
<li>${req.body.valueStreet}</li>
</ul>

`)


console.log(req.body)
    res.send()
})




// создать сервер слушать порт
server.listen(8080, function() {
    console.log('Backend server start on 8080 port')
})