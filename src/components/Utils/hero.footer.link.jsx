import * as React from "react";
import {Link} from "react-scroll";

const HeroFooterLink = ({target, clickFunction}) => {
        return (
                <Link smooth={true} to={target}>
                    <div className="hero-foot" onClick={clickFunction}>
                        <section className="hero">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <p className="title">
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