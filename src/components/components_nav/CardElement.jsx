import React from 'react';
import {Link,useNavigate} from "react-router-dom";

const CardElement = (props) => {
    const navigate = useNavigate()

    return (
        <div>
            <p>red</p>
            <button onClick={() => navigate(-1)}>Back</button>

        </div>
    )
}
export default CardElement