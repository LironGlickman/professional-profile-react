import React from "react";
import Heading from "./Heading";
import Skill from "./Skill";
import programing from '../icons/programming.png'
import blockchain from '../icons/blockchain.png'
import frontend from '../icons/frontend.png'
import backend from '../icons/backend.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
      </header>
      <div className='middle'>  
        <h2>My Skills.</h2>
     <Skill icon={programing} skill="Design & Development" align="left" description="Expert in designing and developing intuitive, user-friendly software applications. Skilled in using a variety of programming languages and frameworks, including JavaScript, TypeScript, NodeJS, React. Proficient in using agile development methodologies to quickly and efficiently deliver high-quality software products. Able to collaborate with cross-functional teams, including designers, developers, and product managers, to bring innovative ideas to life. Experienced in using user testing and user feedback to continuously improve the user experience of software products." />  
     <Skill icon={blockchain} skill="Web 3.0" align="right" description="Expert in using Web3.js to build and interact with decentralized applications (DApps) on the Ethereum blockchain. Skilled in using Web3.js to manage accounts, send transactions, and retrieve data from smart contracts. Proficient in using JavaScript and Web3.js to build client-side applications that can interact with the Ethereum blockchain in a secure and decentralized manner. Able to use Web3.js to build innovative DApps that take advantage of the unique capabilities of the Ethereum platform."/>  
     <Skill icon={backend} skill="Backend" align="left" description="Highly knowledgeable in developing scalable, high-performance back-end systems using JavaScript, Node.js, TypeScript, NestJS, TypeORM, and PostgreSQL. Skilled in using Node.js to build efficient server-side applications that can handle a large volume of requests. Proficient in using TypeScript to write clean, maintainable code that is easy to debug and scale. Experienced in using NestJS to build modular, scalable server-side applications that are easy to test and maintain. Proficient in using TypeORM and PostgreSQL to manage data persistence and ensure data integrity. Able to use these skills to build reliable, high-quality back-end systems that support the needs of modern web applications."/>  
     <Skill icon={frontend} skill="Frontend" align="right" description="Experienced in developing intuitive, user-friendly front-end interfaces using React, HTML, Bootstrap, and CSS. Skilled in using React to build scalable, modular applications with reusable components. Proficient in using HTML and CSS to create clean, semantically correct markup that is optimized for accessibility and search engine optimization. Experienced in using Bootstrap to rapidly prototype and develop responsive layouts that work across a wide range of devices. Able to use these skills to build engaging and effective user experiences that drive business results."/>  
     <Skill align="left" /> 
     <a class="contact-button" href="mailto:7lirong7@gmail.com">CONTACT ME</a>
 
      </div>
      <footer>
      <div className="bottom-container">
      <a className="footer-link" href="https://www.linkedin.com/in/liron-glickman-7a163614a/">LinkedIn</a>
      <a className="footer-link" href="https://twitter.com/GlickmanLiron">Twitter</a>
      <a className="footer-link" href="https://lironglickman.github.io/professional-profile-react/">Website</a>
      <a href="../files/Liron Glickman - Resume 2023.pdf" download>CV - Resume.pdf</a>
      <p className="padding-top: 50px">© Liron Glickman</p>
    </div>

      </footer>
    </div>
  );
}

export default App;
