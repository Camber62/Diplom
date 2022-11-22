import Container from "react-bootstrap/Container";
import img from "../icons/photo_2022-11-15_14-48-08.jpg"

const AboutUs = () => {
    return (
        <Container className=" pt-5">
            <h4 id="AboutUs">О НАС</h4>

            <p className="p-3 bg-white Rounded"><h5>Добро пожаловать в гости к KARGO WOOD!</h5>
                Мы влюбились в дерево и работу с ним в 2020г. Теперь это не просто любовь, а настоящая зависимость. Мы
                обожаем эту работу и стремимся заполонить все рестораны и отели классными изделиями из дерева.
                Нас очень расстраивает, когда в шикарном ресторане с безумно вкусной едой блюда подаются на
                страшненьких, кривеньких, потресканных дощечках. Мы кайфуем, когда рестораны заказывают у нас что-то
                оригинальное, и мы вместе разрабатываем ТОТ САМЫЙ вариант.
                Заехав в отель, мы не снимаем рум тур, мы смотрим на детали. Допустим, вместо чайных пар на пластиковом
                подносе, мы бы сделали крутые чайные станции. И так абсолютно во всем. И в кондитерских, и в пекарнях)
            </p>
            <div className="row">
                <ul className="py-0  col-md-12 col-lg-6">
                    <h5>Чем мы занимаемся:</h5>
                    <li>Индивидуальные решения из дерева для баров, ресторанов, ресторанов, отелей, кафе (изделия для
                        подачи и
                        сервировки, подставки для сумок, триджеки, сервировочные тележки);</li>

                    <li> Эксклюзивные изделия из дерева для отелей (подносы room-service, детали интерьера, чайные
                        станции);
                    </li>
                    <li>Бизнес сувениры на корпоративные праздники (органайзеры, подставки под телефон и т.д.)</li>
                    <li>Элементы декора (полки и подставки, стеллажи для цветов и т.д.);</li>
                    <li>Некоторые варианты мебели (для летних веранд, кофейные столики из спилов).</li>
                </ul>
                <img className="rounded-5 col-md-12 col-lg-6" src={img} alt=""/>
            </div>


            <p>
                Напишите нам на kargowood@yandex.ru. Мы понравимся друг другу 
            </p>
        </Container>
    )
}

export default AboutUs