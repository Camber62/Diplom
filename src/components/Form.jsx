import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function FormExample() {
    const [validated, setValidated] = useState(false);
    const [cargo, setCargo] = useState('')
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form className="telegram-form" method="post" action='form_Telegram/send.php' noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        name="name"
                    />
                    <Form.Control.Feedback>Верно!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        name="lastName"

                    />
                    <Form.Control.Feedback>Верно!</Form.Control.Feedback>
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
                    <ToggleButtonGroup className="w-25" type="radio" name="options-logo" defaultValue={2}
                                       onClick={(e) => {
                                           console.log(e.target.id)
                                       }}>
                        <ToggleButton
                            variant='outline-primary'
                            className="m-1"
                            id="tbg-radio-1"
                            value={1}>
                            С Лого
                        </ToggleButton>
                        <ToggleButton
                            variant="outline-primary"
                            className="m-1"
                            id="tbg-radio-2 "
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
                    <ToggleButtonGroup className="w-50" type="radio" name="options-prise" defaultValue={1}
                                       onClick={(e) => {
                                           // console.log(e.target.defaultValue)

                                       }}>
                        <ToggleButton
                            variant='outline-primary'
                            className="m-1"
                            id="radio-1"
                            value={1}>
                            Расчетный счет(отправьте КП на kargowood@yandex.ru)
                        </ToggleButton>
                        <ToggleButton
                            variant="outline-primary"
                            className="m-1"
                            id="radio-2 "
                            value={2}>
                            QR код
                        </ToggleButton>
                    </ToggleButtonGroup>
                </InputGroup>
            </Row>


            {/*Доставка*/}


            <Row className="mb-3 mt-3">
                <h5 className="mb-3">ДОСТАВКА</h5>

                <ToggleButtonGroup className="w-50" type="radio" name="options-cargo" defaultValue={1}
                                   onClick={(e) => {
                                       if(e.target.id === "cargo-1"){
                                           setCargo("Самовывоз г. Екатеринбург")
                                       }
                                       else if(e.target.id === "cargo-2"){
                                           setCargo("Доставка")}
                                       else return
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
                {cargo==="Доставка" ? <div className={cargo==="Доставка" ? "" : "none"}>
                    <Form.Group  md="6" controlId="validationCustom03">
                        <Form.Label>Город</Form.Label>
                        <Form.Control type="text" placeholder="Город" required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group md="3" controlId="validationCustom04">
                        <Form.Label>Улица</Form.Label>
                        <Form.Control type="text" placeholder="Улица" required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group></div> : <></>}
            </Row>
            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                />
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
    );
}

export default FormExample