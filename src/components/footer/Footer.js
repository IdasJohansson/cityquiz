<<<<<<< HEAD
import React from "react";
import { Row, Container, Col } from "reactstrap";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <h3 className="headlines">About Us</h3>
        <p className="paragraph">
          Hi, Our names are Wilma Hammarshall, Ida Johansson and Maria Sliufko.
          We are studying object-oriented development at NBI/Handelsakadmin.
          Together we have a very diverse background so we complement each other
          well in our efforts of studies to become full-stack developers. We
          hope you enjoy our web-app that was made as a project for school!
        </p>
=======
import React from 'react';
import "./Footer.css";
import Linkedinlogo from "../img/Linkedinlogo.png"
import Githublogo from "../img/Githublogo.png"

export const Footer = () => {
    return(
        <>
        <div className="footer">

        <span>
            <h3 className='headlines'>ABOUT US</h3>
            <p className='paragraph'>
                Hi,
                Our names are Wilma Hammarshall, Ida Johansson and Maria Sliufko. 
                We are studying object-oriented development at NBI/Handelsakadmin.
                Together we have a very diverse background so we complement each 
                other well in our efforts of studies to become full-stack developers. 
                We hope you enjoy our web-app that was made as a project for school!
            </p>
            <h3 className='headlines'>CONTACT US <img className='icon' src ={Linkedinlogo} alt = "LinkedIn"/> </h3>
            <ul className="social-list">
                    <li className="social-list-item">
                        <a className="social-list-link"
                            href="https://www.linkedin.com/in/wilma-hammarshall/" 
                            target="_blank">Wilma</a>
                    </li>
                    <li className="social-list-item">
                        <a className="social-list-link"
                        href="https://www.linkedin.com/in/ida-s-johansson/" 
                        target="_blank">Ida</a>
                    </li>
                    <li className="social-list-item">
                        <a className="social-list-link"
                        href="https://www.linkedin.com/in/maria-sliufko-b8773749/" 
                        target="_blank">Maria</a>
                    </li>
            </ul>
            </span>

            <span>
            <h3 className='headlines'>VIEW OUR PROJECTS <img className='icon' src ={Githublogo} alt = "Github" /></h3>
                    <ul className="social-list">
                    <li className="social-list-item">
                        <a className="social-list-link"
                        href="https://github.com/Hammarshall" 
                        target="_blank">Wilma</a>
                    </li>
                    <li className="social-list-item">
                        <a className="social-list-link"
                        href="https://github.com/IdasJohansson" 
                        target="_blank">Ida</a>
                        </li>
                   <li className="social-list-item">
                       <a className="social-list-link"
                        href="https://github.com/MariaSliufko" 
                        target="_blank">Maria</a>
                        </li>
                   </ul>
<<<<<<< HEAD
               
                
                    <h3 className='headlines'>View our projects</h3>
                    <ul className="social-list">
                    <li className="social-list__item"><a className="social-list__link"
                    href="https://github.com/Hammarshall" target="_blank">Wilma</a></li>
                    <li className="social-list__item"><a className="social-list__link"
                    href="https://github.com/IdasJohansson" target="_blank">Ida</a></li>
                   <li className="social-list__item"><a className="social-list__link"
                   href="https://github.com/MariaSliufko" target="_blank">Maria</a></li>
                   </ul>
               
            
        
    </div>
    </>);
=======
        </span>
        </div>
        <p className="extra-footer"> © 2022 Copyright </p>

    </>
);
>>>>>>> 11356c6cdd680aacd6efc59200152a93f72f18db

        <h3 className="headlines">Contact Us</h3>
        <ul className="social-list">
          <li class="social-list__item">
            <a
              class="social-list__link"
              href="https://www.linkedin.com/in/wilma-hammarshall/"
              target="_blank"
            >
              Wilmas LinkedIn
            </a>
          </li>
          <li class="social-list__item">
            <a
              class="social-list__link"
              href="https://www.linkedin.com/in/ida-s-johansson/"
              target="_blank"
            >
              Idas LinkedIn
            </a>
          </li>
          <li class="social-list__item">
            <a
              class="social-list__link"
              href="https://www.linkedin.com/in/maria-sliufko-b8773749/"
              target="_blank"
            >
              Marias LinkedIn
            </a>
          </li>
        </ul>

        <h3 className="headlines">View our projects</h3>
        <ul className="social-list">
          <li class="social-list__item">
            <a
              class="social-list__link"
              href="https://github.com/Hammarshall"
              target="_blank"
            >
              Wilmas GitHub
            </a>
          </li>
          <li class="social-list__item">
            <a
              class="social-list__link"
              href="https://github.com/IdasJohansson"
              target="_blank"
            >
              Idas GitHub
            </a>
          </li>
          <li class="social-list__item">
            <a
              class="social-list__link"
              href="https://github.com/MariaSliufko"
              target="_blank"
            >
              Marias GitHub
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
