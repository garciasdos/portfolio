import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import "./social.buttons.style.css";

const SocialButtons = ({id, visible}) => (
    <div id={id}>
        {visible &&
            <section className="hero is-light is-fullheight">
                <div className="hero-body">
            <div className="social-btns">
                <a className="btn instagram" href="https://github.com/garciasdos"><FontAwesomeIcon className="fa fa-instagram"
                                                                                      icon={faGithub}/></a>
                <a className="btn twitter" href="https://www.linkedin.com/in/diego-garcia-garcia/"><FontAwesomeIcon className="fa fa-twitter"
                                                                                    icon={faLinkedin} c/></a>
            </div>
                    </div>
                </section>}
    </div>
);

export default SocialButtons;