import Header from "../components/navbar";
import rpa from '../assets/RPA.jpg'
import arvr from '../assets/arvr.webp'
import bc from '../assets/blockchain.png'
import TechStack from '../components/Technology'
import devops from '../assets/devops.png'
import saythanks from '../assets/inbox.png'

const Technology = () => {
    return (
        <>
        <Header />
            <div className="Tech">
                <h1>Technology</h1>
            </div>
            <div className="Tech-content">
                <h1>Technologies We Cover😆 </h1>
                <TechStack image={rpa} title="Robotic Process Automation" para="Robotic process automation (RPA) is a software technology that makes it easy to build, deploy, and manage software robots that emulate humans actions interacting with digital systems and software. Just like people, software robots can do things like understand what’s on a screen, complete the right keystrokes, navigate systems, identify and extract data, and perform a wide range of defined actions. But software robots can do it faster and more consistently than people, without the need to get up and stretch or take a coffee break." />
                <TechStack image={arvr} title="Argumented / Virtual Reality" para="We spend a lot of time looking at screens these days. Computers, smartphones, and televisions have all become a big part of our lives; they're how we get a lot of our news, use social media, watch movies, and much more. Virtual reality (VR) and augmented reality (AR) are two technologies that are changing the way we use screens, creating new and exciting interactive experiences.Virtual reality uses a headset to place you in a computer-generated world that you can explore. Augmented reality, on the other hand, is a bit different. Instead of transporting you to a virtual world, it takes digital images and layers them on the real world around you through the use of either a clear visor or smartphone."/>
                <TechStack image={bc} title="Blockchain" para="A blockchain is a type of distributed ledger technology (DLT) that consists of growing list of records, called blocks, that are securely linked together using cryptography.[1][2][3][4] Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree, where data nodes are represented by leaves). The timestamp proves that the transaction data existed when the block was created. Since each block contains information about the previous block, they effectively form a chain (compare linked list data structure), with each additional block linking to the ones before it. Consequently, blockchain transactions are irreversible in that, once they are recorded, the data in any given block cannot be altered retroactively without altering all subsequent blocks." />
                <TechStack image={devops} title="DevOps" para="DevOps is a set of practices, tools, and a cultural philosophy that automate and integrate the processes between software development and IT teams. It emphasizes team empowerment, cross-team communication and collaboration, and technology automation.The DevOps movement began around 2007 when the software development and IT operations communities raised concerns about the traditional software development model, where developers who wrote code worked apart from operations who deployed and supported the code. The term DevOps, a combination of the words development and operations, reflects the process of integrating these disciplines into one, continuous process."/>
                <h1 style={{marginTop:'70px'}}>Open Source we do 😍</h1>
                <TechStack image={saythanks} title="Say Thanks" para="SayThanks.io provides a handy URL for you to share with your open source projects— it encourages users to send a simple thank you note to you, the creator of that project.This simple link can be added to READMEs and project documentation.Then, you can enjoy a nice inbox of very small but thoughtful messages from the happy users of the software that you've toiled over. :) Click on the image to view the Say Thanks ❤" link="https://saythanks.io/" />
             </div>
        </>
    )

}

export default Technology;