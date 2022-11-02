import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

import FormExample from "./Form";
const Basket = () => {

    const [count, setCount] = useState(1)
    const [amount, SetAmount] = useState(500)
    const [openForm,setOpenForm]=useState(false)

    const Count = (e) => {
        e.preventDefault()

        const Amount = () => {
            SetAmount(count * 500)
        }



        if (e.target.value === "+") {
            setCount(count + 1)
            Amount()


        } else if (e.target.value === "-" && count > 1) {
            setCount(count - 1)
            Amount()

        }


//уточнить с добавлением Amount

    }




    return (
        <Container fluid  className="p-0 pt-3 bg-white">
            <Container>
                <div className=" bg-white border_radius"><h4>Form zakaz</h4>
                <Table>
                    <tr>
                        <th>Товар</th>
                        <th>Цена</th>
                        <th>Кол-во</th>
                        <th>Сумма</th>
                        <th><h4>Рачсет</h4></th>
                    </tr>
                    <br/>
                    <tr>
                        <td>"Name"</td>
                        <td>1234</td>
                        <td>
                            <button value="-" onClick={Count}>-</button>
                            {count}
                            <button value="+" onClick={Count}>+</button>
                        </td>
                        <td>{amount}</td>
                        <td>Raschet</td>
                    </tr>
                </Table>
            </div>

                <button className="w-100 mb-5 mt-5  bg-white border-0"  onClick={()=>{setOpenForm(!openForm)}}>
                    {openForm ?
                    <img src="https://img.icons8.com/office/64/000000/ostrich-head-in-sand.png"/> :
                        <img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-ostrich-birds-icongeek26-flat-icongeek26.png"/>}

                </button>
                {openForm ? <FormExample/> : <></>}


            </Container>
        </Container>
    )

}


export default Basket