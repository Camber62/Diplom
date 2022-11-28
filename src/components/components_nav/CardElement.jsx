import React from 'react';
import {useNavigate,useParams} from "react-router-dom";
// import {Button} from "react-bootstrap";
const CardElement = (props) => {
    const navigate = useNavigate()
    // const { key,value } = useParams();
    const setShowBtn= props.setShowBtn
    const elementCard=props.elementCard
    console.log(elementCard)

    return (


        <div>
            <button className=" border-0 bg-white " onClick={() => {navigate(-1);setShowBtn(false)}}>
                <img src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                {elementCard.name}
            </button>
        </div>

    )

}

export default CardElement