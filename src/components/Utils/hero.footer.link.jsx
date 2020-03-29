import * as React from "react";
import {Link} from "react-scroll";
import "./hero.footer.link.css";
import Emoji from "./emoji.component";

const HeroFooterLink = ({target, clickFunction, type, text}) => {
        let paragraphClass = "";
        if (type === "dark") {
             paragraphClass = "has-text-dark"
        } else if (type === "light") {
            paragraphClass = "has-text-light"
        }
        return (
                <Link smooth={true} to={target}>
                    <div className="hero-foot" onClick={clickFunction}>
                        <section className="hero">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <p className={`title text-focus-in ${paragraphClass}`}>
                                        Who am I?
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </Link>
        );
    };

export default HeroFooterLink;