import React from "react";

function Contact(props) {

    return <div className="contact-card">
        <table>
            <tr>
                <td className="img-td">
                    <a href={props.link} target="_blank"><img className="platform-icon" src={props.icon} alt="platrorm-icon"></img></a>
                </td>
                <td>
                    <h4 className="contact-platfom" >{props.platform}</h4>
                    <p className="contact-info">{props.info}</p>
                </td>
            </tr>
        </table>
    </div>
}
export default Contact;