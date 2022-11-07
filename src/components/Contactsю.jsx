import Container from "react-bootstrap/Container";

const Contacts = () => {
    return (
        <Container fluid={100} className=" bg-dark  pt-3 text-white">
            <Container>
                <h4 id="Contacts">KARGO WOOD – семейная мастерская изделий для HoReCa.</h4>
                <div className='d-flex justify-content-between'><p>Г. Екатеринбург
                </p>
                    <p>
                        kargowood@yandex.ru.
                    </p>
                </div>
            </Container>
        </Container>
    )
}

export default Contacts