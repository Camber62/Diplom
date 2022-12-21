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
            if (basket[i].name === int.name) {
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
                        <tr className='bg-light rounded_top'>
                            <th>Товар</th>
                            <th className='text-center'>Цена</th>
                            <th className='text-center'>Кол-во</th>
                            <th className='text-center'>Сумма</th>
                            <th className='text-center'>Удаление</th>
                        </tr>
                        {basket.map((int, element) => {
                                return (
                                    <tr key={element}>
                                        <td>{int.name}</td>
                                        <td className='text-center'>{int.price}</td>
                                        <td className='text-center'>
                                            <button className=" bg-white border-0" value="-" onClick={(e) => {
                                                Count(e, int)
                                            }}> -
                                            </button>
                                            <p className='d-block d-md-inline my-3'>{int.count}</p>
                                            <button className=" bg-white border-0" value="+" onClick={(e) => {
                                                Count(e, int)
                                            }}> +
                                            </button>
                                        </td>
                                        <td className='text-center'>{int.totalPrice}</td>
                                        <td className='text-center'>
                                            <button className='border-0 bg-white'  onClick={() => {
                                                DeleteBasket(element)
                                            }}><img alt='delete' src="https://img.icons8.com/material-sharp/24/null/delete-sign.png"/>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        )
                        }
                        </tbody>
                    </Table>
                    <strong>Общая сумма:</strong>
                    <strong className="pt-5">   {totalPrice} рублей</strong>
                </div>
                <FormExample totalPrice={totalPrice} basket={basket}/>
        </Container>
    )

}


export default Basket