import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useRef,useEffect } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(()=> {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
         },4000);
     },[])

     const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'gmail',
            'template_0y5zndl',
            refForm.current,
            'pCuVuOCg2XtgDk2ZUszIy'
        )
        .then(
            () =>{
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () =>{
                alert('Failed to send the message, try again')
            }
        )
     }
 
  return(
        <>
       <div className='container contact-page'>
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't','a','c', 't', ' ', 'M','e']}
                    idx = {15}
                    />
                </h1>

                <p>
                    As a fourth-year Computer Science student, I am interested in internship opportunities that will help me gain more hands-on experience in the field, 
                    and give me the opportunities to grow and develop as a programmer, while allowing me to showcase my skills. I sincerely look forward to working with other valuable
                    team-members and contributing to translating project ideas into real-life projects.
                </p>

                <div className = 'contact-form'>
                    <form ref={refForm} onSubmit = {sendEmail} >
                        <ul>
                            <li className = 'half'>
                               <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li email = 'half'>
                               <input type="email" name="email" placeholder="Email" required/>
                            </li>

                            <li>
                                <input placeholder = "Subject" type = "text" name = "subject" required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>

            </div>
            <div className = 'info-map'>
             Arushi Moneeram
             <br/>
             Canada,
             <br/>
             St.John's<br/>
             <span>admoneeram[at]mun.ca</span>
            </div>
        </div>
        <Loader type = "pacman"/>
    </>
  )
}

export default Contact