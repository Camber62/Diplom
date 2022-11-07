import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import FormExample from "./Form";


const Basket = (props) => {
    const setBasket = props.setBasket
    const basket = props.basket
    const [openForm, setOpenForm] = useState(false)

    const Count = (e,int) => {
        e.preventDefault()
            console.log(int.id,e)

        for (let i = 0; i < basket.length; i++) {
            if(basket[i].id===int.id){
                if (e.target.value === "+") {
                    basket[i].count++
                    basket[i].totalPrice=basket[i].count*basket[i].price
                    setBasket([...basket])
                }else if (e.target.value === "-" && basket[i].count > 1){
                    basket[i].count--
                    basket[i].totalPrice=basket[i].count*basket[i].price
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
        console.log(elem)

    }


    return (
        <Container   fluid className="p-0 mt-5 bg-white">
            <Container >
                <h4 id="form">Форма заказа</h4>
                <div className=" bg-white border_radius" >
                    <Table>
                        <tr>
                            <th>Товар</th>
                            <th>Цена</th>
                            <th>Кол-во</th>
                            <th>Сумма</th>
                            <th>удаление</th>
                            <th><h4>Рачсет</h4></th>
                        </tr>
                        <br/>
                        {basket.map((int, element) => {
                                return (
                                    <tr>
                                        <td>{int.name}</td>
                                        <td>{int.price}</td>
                                        <td>
                                            <button value="-" onClick={(e)=>{Count(e,int)}}>-</button>
                                            {int.count}
                                            <button value="+" onClick={(e)=>{Count(e,int)}}>+</button>
                                        </td>
                                        <td>{int.totalPrice}</td>
                                        <td>
                                            <button onClick={() => {
                                                DeleteBasket(element)
                                            }}>Del
                                            </button>
                                        </td>
                                        <td>Raschet</td>
                                    </tr>
                                )
                            }
                        )
                        }
                    </Table>
                </div>

                <button className="w-100 mb-5 mt-5  bg-white border-0" onClick={() => {
                    setOpenForm(!openForm)
                }}>
                    {openForm ?
                        <img src="https://img.icons8.com/office/64/000000/ostrich-head-in-sand.png" alt="img"/> :
                        <img
                            src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-ostrich-birds-icongeek26-flat-icongeek26.png"
                            alt="img"/>}

                </button>
                {openForm ? <FormExample/> : <></>}
            </Container>
        </Container>
    )

}


export default Basket