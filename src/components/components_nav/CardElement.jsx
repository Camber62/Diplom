import React from 'react';
import {useNavigate,useParams} from "react-router-dom";
import {Button} from "react-bootstrap";

const CardElement = (props) => {
    const navigate = useNavigate()
    const { name } = useParams();
    const setShowBtn= props.setShowBtn

    return (


        <div>
            <p>{name}</p>
            <Button onClick={() => {navigate(-1);setShowBtn(false)}}>Back</Button>

        </div>

    )

}

export default CardElement