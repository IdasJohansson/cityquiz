import React from 'react';
import { Row, Container, Col } from 'reactstrap';
import "./Footer.css";

export const Footer = () => {
    return(
        <>
    <div className='footer'>
                    <h3>About Us</h3>
                    <p>
                    Hi,
                    Our names are Wilma Hammarshall, Ida Johansson and Maria Sliufko. 
                    We are studying object-oriented development at NBI/Handelsakadmin.
                    Together we have a very diverse background so we complement each 
                    other well in our efforts of studies to become full-stack developers. 
                    We hope you enjoy our web-app that was made as a project for school!
                    </p>
               
                    <h3>Contact Us</h3>
                    <ul className="linkedin-social-list">
                    <li class="social-list__item"><a class="social-list__link"
                    href="https://www.linkedin.com/in/wilma-hammarshall/" target="_blank">Wilmas LinkedIn</a></li>
                    <li class="social-list__item"><a class="social-list__link"
                    href="https://www.linkedin.com/in/ida-s-johansson/" target="_blank">Idas LinkedIn</a></li>
                   <li class="social-list__item"><a class="social-list__link"
                   href="https://www.linkedin.com/in/maria-sliufko-b8773749/" target="_blank">Marias LinkedIn</a></li>
                   </ul>
               
                
                    <h3>View our projects</h3>
                    <ul className="github-social-list">
                    <li class="social-list__item"><a class="social-list__link"
                    href="https://github.com/Hammarshall" target="_blank">Wilmas GitHub</a></li>
                    <li class="social-list__item"><a class="social-list__link"
                    href="https://github.com/IdasJohansson" target="_blank">Idas GitHub</a></li>
                   <li class="social-list__item"><a class="social-list__link"
                   href="https://github.com/MariaSliufko" target="_blank">Marias GitHub</a></li>
                   </ul>
               
            
        
    </div>
    </>
);

}