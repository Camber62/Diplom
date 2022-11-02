import React from 'react';
import {useNavigate,useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import { TransitionGroup } from 'react-transition-group'

const CardElement = (props) => {
    const navigate = useNavigate()
    const { name } = useParams();
    return (
        <TransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>

        <div>
            <p>{name}</p>
            <Button onClick={() => navigate(-1)}>Back</Button>

        </div>
        </TransitionGroup>
    )

}

export default CardElement