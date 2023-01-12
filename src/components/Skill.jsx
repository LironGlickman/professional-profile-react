import React from "react";

function Skill(props) {
    return <div className="skill-row" >
        <img src={props.icon} alt="skill-img" className={`${props.align}`}></img>
        <h3>{props.skill}</h3>
        <p>{props.description}</p>
    </div>
}
export default Skill