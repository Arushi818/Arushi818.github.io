import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import logoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faLightbulb, faUser} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
     <div className= 'nav-bar'>
        <Link className= 'logo' to='/'>
            <img src={logoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="Arushi"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname= "active" to="/">
            <FontAwesomeIcon icon={faHome} color= "4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname= "active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color= "4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname= "active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color= "4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname= "active" className="projects-link" to="/projects">
            <FontAwesomeIcon icon={faLightbulb} color= "4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel = 'noreferrer' href ="https://www.linkedin.com/in/arushi-moneeram-640b5221a/">
                    <FontAwesomeIcon icon={faLinkedin} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a target = "_blank" rel = 'noreferrer' href ="https://github.com/Arushi818">
                    <FontAwesomeIcon icon={faGithub} color = "#4d4d4e" />
                </a>
            </li>
        </ul>
     </div>

)

export default Sidebar