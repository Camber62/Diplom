import React, { useState} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import Container from 'react-bootstrap/Container';
import Toastr from './Toastr/Toastr2';


function FormExample(props) {
    const basket = props.basket
    const totalPrice = props.totalPrice


    const [valueName, setValueName] = useState('');
    const [valueSurName, setValueSurName] = useState('');
    const [valueLastEmail, setValueLastEmail] = useState('');
    const [valueLogo, setValueLogo] = useState('');
    const [valuePayment, setValuePayment] = useState('');
    const [valueDelivery, setValueDelivery] = useState('');
    const [valueSity, setValueSity] = useState('');
    const [valueStreet, setValueStreet] = useState('');


    const [validated, setValidated] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);


    };

    async function Sending() {
            if (valueName === '' || valueSurName === '' || valueLastEmail === '' || valueLogo === '' || valuePayment === '' || valueDelivery === '') {
                return false
            }


            await zapros()

            return true
    }


    const zapros = async (event) => {
        try {
            // event.preventDefault();
            const url = "https://doski2.onrender.com/send-order";
            await fetchWithTimeout(url, {
                method: "POST",
                body: JSON.stringify({
                    valueName,
                    valueSurName,
                    valueLastEmail,
                    valueLogo,
                    valuePayment,
                    valueDelivery,
                    valueSity,
                    valueStreet,
                    basket,
                    totalPrice

                }),
                headers: {
                    "Content-Type": "application/json"
                },
            }, 5000);
        } catch (err) {
            console.log('error')
            console.error(err)
        }

    }

    const fetchWithTimeout = function (url, options, timeout = 7000) {
        return Promise.race([
            fetch(url, options),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error('timeout')), timeout)
            )
        ]);
    }


    return (
        <Container>

            <Form noValidate id="tg" className="telegram-form form pt-5" validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Имя"
                            name="name"
                            onChange={e => setValueName(e.target.value)}
                        />
                        <Form.Control.Feedback>Верно!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Пожалуйста введите Имя
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Фамилия"
                            name="lastName"
                            onChange={e => setValueSurName(e.target.value)}
                        />
                        <Form.Control.Feedback>Верно!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Пожалуйста введите фамилию
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Отчество</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Отчество"
                            name="lastName"
                            // onChange={e => setValueSurName(e.target.value)}
                        />
                        <Form.Control.Feedback>Верно!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Пожалуйста введите Отчество
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomPhone">
                        <Form.Label>Телефон</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrependPhone">📱</InputGroup.Text>

                            <Form.Control
                                type='tel'
                                placeholder="Телефон"
                                aria-describedby="inputGroupPrepend"
                                required
                                name='Phone'

                                // onChange={e => setValueLastEmail(e.target.value)}

                            />

                            <Form.Control.Feedback type="invalid">
                                Пожалуйста введите номер телефон.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomEmail">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="Email"
                                placeholder="Email"
                                aria-describedby="inputGroupPrepend"
                                required
                                name='Email'
                                onChange={e => setValueLastEmail(e.target.value)}

                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a email.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>


                {/*НАНЕСЕНИЕ ЛОГОТИПА*/}


                <Row>
                    <InputGroup className="flex-column">
                        <h5 className="mb-3 mt-3">НАНЕСЕНИЕ ЛОГОТИПА</h5>
                        <ToggleButtonGroup className="w-25" type="radio" name="options-logo"
                                           onClick={(e) => {
                                               setValueLogo(e.target.id)
                                           }}>
                            <ToggleButton
                                variant='outline-primary'
                                className="m-1"
                                id="C Лого"
                                value={1}>
                                С Лого
                            </ToggleButton>
                            <ToggleButton
                                variant="outline-primary"
                                className="m-1"
                                id="Без Лого"
                                value={2}>
                                Без Лого
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </InputGroup>
                </Row>


                {/*ОПЛАТА*/}

                <Row>

                    <InputGroup className="flex-column">
                        <h5 className="mb-3 mt-3">ОПЛАТА</h5>
                        <ToggleButtonGroup className="w-50" type="radio" name="options-prise"
                                           onClick={(e) => {
                                               setValuePayment(e.target.id)

                                           }}>
                            <ToggleButton
                                variant='outline-primary'
                                className="m-1"
                                id="Расчетный счет(отправлен КП на kargowood@yandex.ru)"
                                value={1}>
                                Расчетный счет(отправте КП на kargowood@yandex.ru)
                            </ToggleButton>
                            <ToggleButton
                                variant="outline-primary"
                                className="m-1"
                                id="QR код"
                                value={2}>
                                QR код
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </InputGroup>
                </Row>


                {/*Доставка*/}


                <Row className="mb-3 mt-3">
                    <h5 className="mb-3">ДОСТАВКА</h5>

                    <ToggleButtonGroup className="w-50" type="radio" name="options-cargo"
                                       onClick={(e) => {
                                           if (e.target.id === "cargo-1") {
                                               setValueDelivery("Самовывоз г. Екатеринбург")
                                           } else if (e.target.id === "cargo-2") {
                                               setValueDelivery("Доставка")
                                           } else return
                                           // console.log(e.target.id)
                                       }
                                       }>
                        <ToggleButton
                            variant='outline-primary'
                            className="m-1"
                            id="cargo-1"
                            value={1}>
                            Самовывоз г. Екатеринбург
                        </ToggleButton>
                        <ToggleButton
                            variant="outline-primary"
                            className="m-1"
                            id="cargo-2"
                            value={2}>
                            Доставка в другие регионы
                        </ToggleButton>
                    </ToggleButtonGroup>
                    {/*{valueDelivery==="Доставка" ?*/}
                    <div className={valueDelivery === "Доставка" ? "" : "none"}>
                        <Form.Group md="6" controlId="validationCustom03">
                            <Form.Label>Город</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Город"
                                required
                                onChange={e => setValueStreet(e.target.value)}

                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group md="3" controlId="validationCustom04">
                            <Form.Label>Улица</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Улица"
                                required
                                onChange={e => setValueSity(e.target.value)}

                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group></div>
                    {/*: <></>}*/}
                </Row>

                <Toastr
                    title="Заявка успешно отправлена!"
                    message="С вами свяжутся в скором времени."
                    color="info"
                    position="bottom-center"
                >
                    {({
                          onShow,
                          onHide,
                          state
                      }) => {
                        return <AwesomeButton onPress={async () => {
                            const ces = await Sending();

                            if (ces) {
                                onShow();
                            }
                        }} className="mb-5 btn_form"
                                              type="primary"><h6>Сделать
                            заказ</h6></AwesomeButton>
                    }}
                </Toastr>

            </Form>
        </Container>
    );
}

export default FormExample