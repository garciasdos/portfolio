import React from 'react';
import mhLogo from '../../../logo-multihelpers2.svg';
import HLZLogo from '../../../holaluz-logo.svg';
import CardComponent from "./Card/card.component";
import ContactButton from "./contact.button.component/contact.button.component";

import "./cards.style.css";

const content = {
    0: "Before finishing my degree, I started working at Multihelpers as a <strong>software developer</strong>. First contact with the \"real world\", realising that all of the knowledge acquired over 4 years of studying were only the basis of the real challenge: trying to do things right in a scenario of deadlines, constant requests...",
    1: "After finishing the Computer Science degree, I was hired by Multihelpers. Thanks to my mentor Javier, I started to get into the world of clean software architecture, SOLID principles, DDD... trying to implement them in a legacy scenario to ease maintainability and reach scalability.",
    2: "I moved to <strong>Barcelona</strong> and I was hired by Holaluz, where I had the opportunity of being a part of an exceptional team. I was able to learn how a great company advocates doing things right, trying to maintain the quality of everything it does and also in an unbeatable work environment.",
    3: "For life's sake, I went back to Pamplona, and I thought the best place to work was Multihelpers. My goal: to try to apply everything I learned in this last stage in the first company that gave me the opportunity to grow professionally."
};

const CardsComponent = ({id, visible, contactPage, clickFunction}) => (
    <div id={id}>
        {visible && <section className="hero is-light is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="tile is-ancestor">
                        <div className="tile is-vertical is-parent">
                            <CardComponent logo={mhLogo} title={"Software Developer"} type="Internship"
                                           duration="September 2017 - April 2018 (8 months)"
                                           content={content[0]} className="scale-in-center-1"/>
                            <CardComponent logo={mhLogo} title={"Software Developer"} type="Full-time"
                                           duration="April 2018 - May 2019 (1 year 2 months)"
                                           content={content[1]} className="scale-in-center-2"/>
                        </div>
                        <div className="tile is-vertical is-parent">
                            <CardComponent logo={HLZLogo} title={"Backend Developer"} type="Full-time"
                                           duration="May 2019 - September 2019 (5 months)"
                                           content={content[2]} className="scale-in-center-3"/>
                            <CardComponent logo={mhLogo} title={"Backend Team Leader"} type="Full-time"
                                           duration="September 2019 - Present"
                                           content={content[3]} className="scale-in-center-4"/>
                            <ContactButton target={contactPage} clickFunction={clickFunction}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>}
    </div>
);

export default CardsComponent;