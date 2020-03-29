import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import "./social.buttons.style.css";

const SocialButtons = ({id, visible}) => (
    <div id={id}>
        {visible &&
            <section className="hero is-light is-fullheight">
                <div className="hero-body">
            <div className="social-btns">
                <a className="btn facebook" href="http://google.es"><FontAwesomeIcon className="fa fa-facebook"
                                                                                     icon={faFacebookF}/></a>
                <a className="btn instagram" href="http://google.es"><FontAwesomeIcon className="fa fa-instagram"
                                                                                      icon={faInstagram}/></a>
                <a className="btn twitter" href="http://google.es"><FontAwesomeIcon className="fa fa-twitter"
                                                                                    icon={faLinkedin} c/></a>
            </div>
                    </div>
                </section>}
    </div>
);

export default SocialButtons;