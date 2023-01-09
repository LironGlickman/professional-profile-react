import React from "react";
import Heading from "./Heading";
import Skill from "./Skill";
import programing from '../icons/programming.png'
import blockchain from '../icons/blockchain.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
      </header>
      <div className='middle'>  
      <hr className="hr"></hr>
      <h2>My Skills.</h2>
     <Skill icon={programing} skill="Design & Development" align="left" description="Expert in designing and developing intuitive, user-friendly software applications. Skilled in using a variety of programming languages and frameworks, including JavaScript, TypeScript, NodeJS, React. Proficient in using agile development methodologies to quickly and efficiently deliver high-quality software products. Able to collaborate with cross-functional teams, including designers, developers, and product managers, to bring innovative ideas to life. Experienced in using user testing and user feedback to continuously improve the user experience of software products." />  
     <Skill icon={blockchain} skill="Web 3.0" align="right" description="Expert in using Web3.js to build and interact with decentralized applications (DApps) on the Ethereum blockchain. Skilled in using Web3.js to manage accounts, send transactions, and retrieve data from smart contracts. Proficient in using JavaScript and Web3.js to build client-side applications that can interact with the Ethereum blockchain in a secure and decentralized manner. Able to use Web3.js to build innovative DApps that take advantage of the unique capabilities of the Ethereum platform."/>  
 
     <Skill align="left" />  
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default App;
