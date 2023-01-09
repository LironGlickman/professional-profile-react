import React from "react";
import programing from '../icons/programming.png'
import blockchain from '../icons/blockchain.png'
function Skill(props) {
    return <div className="skill-row" >
        <img src={props.icon} className={`${props.align}`}></img>
        <h3>{props.skill}</h3>
        <p>{props.description}</p>
    </div>
}
export default Skill