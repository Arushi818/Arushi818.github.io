import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AnimatedLetters from "../AnimatedLetters"
import './index.scss'
import {useState,useEffect} from 'react'
import { faAngular, faCss3, faHtml5, faJava, faJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons"
import Loader from "react-loaders"

const About = () => {


    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(()=> {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
         },3000);
     },[])

    return (
        <>
        <div className = 'container about-page'>
            <div className = 'text-zone'>
               <h1>
                   <AnimatedLetters
                     letterClass = {letterClass}
                    strArray={['A','b','o','u','t',' ', 'm','e']}
                    idx = {15}
                   />
               </h1>
               <p>
               I am an ambitious Computer Science student, motivated to explore the fascinating world of Computer Science. Coding truly passionnates me and I am grateful for being able to study the different branches of Computer Science.  

               </p>
               <p>
               I am quiet but friendly, naturally curious and always working on refining my skills in the field.
               I also have a passion for painting and have been a swimmer for 13 years!
               </p>

               <p>
                If I need to define myself in one sentence that would be a friendly person,
                a very grateful daughter,  a nature-loving person, a passionnated painter and 
                tech enthusiast!!
               </p>
            </div>
     

            <div className = 'stage-cube-cont'>
               <div className = 'cubespinner'>
                   <div className = 'face1'>
                        <FontAwesomeIcon icon={faAngular} color = '#DD0031'/>
                   </div>
                   <div className = 'face2'>
                        <FontAwesomeIcon icon={faPython} color = '#DD0031'/>
                   </div>
                   <div className = 'face3'>
                        <FontAwesomeIcon icon={faJava} color = '#DD0031'/>
                   </div>
                   <div className = 'face4'>
                        <FontAwesomeIcon icon={faJs} color = '#DD0031'/>
                   </div>
                   <div className = 'face5'>
                        <FontAwesomeIcon icon={faHtml5} color = '#DD0031'/>
                   </div>
                   <div className = 'face6'>
                        <FontAwesomeIcon icon={faCss3} color = '#DD0031'/>
                   </div>
                   <div className = 'face7'>
                        <FontAwesomeIcon icon={faReact} color = '#DD0031'/>
                   </div>
               </div>
        </div>
        </div>
        <Loader type = "pacman"/>
        </>
        
    )

}

export default About