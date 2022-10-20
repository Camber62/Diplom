import React from 'react';
import {Link,useNavigate} from "react-router-dom";
// import {useHistory} from "react-router-dom";
import image  from '../../icons/lemur.jpg'


const EndBoard = (props) => {
    return (
        <>
            {/*<img src={image} alt="img"/>*/}
            {props.elem.map((int, element) => {
                return (<div>
                    <img src={int.src} alt="img"/>
                    <p key={element}>
                        <Link to={`/${int.name}`} onclick={props.setPath(int.name)}>{int.name}</Link>
                    </p></div>)
            })}

        </>
    )
}
export default EndBoard

