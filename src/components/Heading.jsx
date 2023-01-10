import React from "react";
import Contact from "./Contact";
import smartphone from '../icons/smartphone.png'
import email from '../icons/email.png'
import linkedin from '../icons/linkedin.png'
import gitlab from '../icons/gitlab.png'
import profile from '../icons/profile.jpg';
import github from '../icons/github.png'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Heading() {
    return (<div>

        <div>
            <Container fluid>
                <Row>
                    <Col lg="6" xxl="2" className="img-box d-flex align-items-center justify-content-center">
                        <img src={profile} alt="profile-pic" className="mr-3"></img>
                    </Col>
                    <Col lg="6" xxl="8">
                        <div>
                            <h1 className="heading">Liron Glickman</h1>
                            <p className="summary">
                                Highly motivated full stack web developer with 2 years of experience building and maintaining web application using JavaScript, TypeScript, NodeJS, React, CSS, and HTML. <br />   Talented individual with strong project management and problem-solving skills, team spirit, and B.Sc. in Software Engineering.
                            </p>
                        </div>
                    </Col>
                    
                    <Col xxl="2" lg="3" style={{ "padding-right": 0 }} className="d-flex align-items-center justify-content-center">
                        <div className="contact-elements ">
                            <Contact icon={smartphone} platform="Mobile" info="052-6959414" link="tel:052-6959414" />
                            <Contact icon={email} platform="Email" info="7lirong7@gmail.com" link="mailto:7lirong7@gmail.com" />
                            <Contact icon={linkedin} platform="Linkedin" info="Liron Glickman | liron-glickman-7a163614a" link="https://www.linkedin.com/in/liron-glickman-7a163614a/" />
                            <Contact icon={github} platform="GitHub" info="LironGlickman" link="https://github.com/LironGlickman" />
                            <Contact icon={gitlab} platform="GitLab " info="LironGlickman" link="https://gitlab.com/LironGlickman" />
                        </div></Col>
                        <Col lg="9" xxl="0"> </Col>
                </Row>
            </Container>

        </div>
    </div>


    )
}
export default Heading;