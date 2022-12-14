import React from 'react';
import {useNavigate} from "react-router-dom";
import {Image} from "react-bootstrap";
// import {Button} from "react-bootstrap";
const CardElement = (props) => {
    const navigate = useNavigate()
    // const { key,value } = useParams();
    const setShowBtn = props.setShowBtn
    const elementCard = props.elementCard
    console.log(elementCard)

    return (
        <>
            <button className="back border-0 " onClick={() => {
                navigate(-1);
                setShowBtn(false)
            }}>
                <img alt='back' src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
            </button>
            <div>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Image src={elementCard.src} alt="alt" className='col-4 Rounded'/>
                    <div className='d-block text-left p-sm-5 p-3 col-8'>
                        <b>{elementCard.name}</b>
                        <p>{elementCard.about}</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CardElement