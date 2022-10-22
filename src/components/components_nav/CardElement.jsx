import React from 'react';
import {useNavigate,useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
const CardElement = (props) => {
    const navigate = useNavigate()
    const { name } = useParams();
    return (
        <div>
            <p>{name}</p>
            <Button onClick={() => navigate(-1)}>Back</Button>

        </div>
    )
}
export default CardElement