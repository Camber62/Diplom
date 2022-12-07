import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import FormExample from "./Form";

const Basket = (props) => {
    const setBasket = props.setBasket
    const basket = props.basket
    const totalPrice = getTotalPrice()

    function getTotalPrice() {
        let sum = 0

        for (let b of basket) {
            sum += b.totalPrice
        }

        return sum
    }

    const Count = (e, int) => {
        e.preventDefault()

        for (let i = 0; i < basket.length; i++) {
            if (basket[i].id === int.id) {
                if (e.target.value === "+") {
                    basket[i].count++
                    basket[i].totalPrice = basket[i].count * basket[i].price
                    setBasket([...basket])
                } else if (e.target.value === "-" && basket[i].count > 1) {
                    basket[i].count--
                    basket[i].totalPrice = basket[i].count * basket[i].price
                    setBasket([...basket])
                }
            }
        }
    }


    const DeleteBasket = (elem) => {
        const newToDoList = basket.filter(function (entry, index) {
            return index !== Number(elem);
        });
        setBasket(newToDoList);
        // console.log(elem)

    }




    return (
        <Container className="p-3 mt-5 mb-5 bg-white Rounded">
                <h4 id="form">Форма заказа</h4>
                <div className=" bg-white border_radius">
                    <Table>
                        <tbody>
                        <tr>
                            <th>Товар</th>
                            <th>Цена</th>
                            <th>Кол-во</th>
                            <th>Сумма</th>
                            <th>удаление</th>
                        </tr>
                        {basket.map((int, element) => {
                                return (
                                    <tr key={int.id}>
                                        <td>{int.name}</td>
                                        <td>{int.price}</td>
                                        <td >
                                            <button className="bg-white border-0" value="-" onClick={(e) => {
                                                Count(e, int)
                                            }}>-
                                            </button>
                                            <p className='d-block d-md-inline my-3'>{int.count}</p>
                                            <button className="bg-white border-0" value="+" onClick={(e) => {
                                                Count(e, int)
                                            }}>+
                                            </button>
                                        </td>
                                        <td>{int.totalPrice}</td>
                                        <td>
                                            <button className='border-0 bg-white'  onClick={() => {
                                                DeleteBasket(element)
                                            }}>X
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        )
                        }
                        </tbody>
                    </Table>
                    <strong>Rashet:</strong>
                    <strong className="p-5">{totalPrice}</strong>
                </div>
                <FormExample basket={basket}/>
        </Container>
    )

}


export default Basket