import React from 'react';
import mhLogo from '../../logo-multihelpers2.svg';
import HLZLogo from '../../holaluz-logo.svg';
import {Link} from "react-scroll";

class HistoryComponent extends React.Component {
    render() {
        return (
            <div id={this.props.id}>
                {this.props.visible && <section className="hero is-light is-fullheight">
                    <div className="hero-body">
                        <div className="tile is-ancestor">
                            <div className="tile is-vertical is-parent">
                                <div className="tile is-child box">
                                    <div className="columns is-centered">
                                    <div className="column is-three-quarters-tablet is-half-desktop ">
                                        <div className="image is-3by1">
                                            <img src={mhLogo} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                    <p className="title">
                                        Software Developer (Internship)
                                    </p>
                                    <p className="subtitle">
                                        September 2017 - April
                                        2018 (8 months)
                                    </p>
                                    <p className="content">
                                        Before finishing my degree, I started
                                        working at Multihelpers as a <strong>software
                                        developer</strong>. First contact with the "real
                                        world", realising that all of the
                                        knowledge acquired over 4 years of
                                        studying were only the basis of the real
                                        challenge: trying to do things right in a
                                        scenario of deadlines, constant
                                        requests...
                                    </p>
                                </div>
                                <div className="tile is-child box">
                                    <div className="columns is-centered">
                                        <div className="column is-three-quarters-tablet is-half-desktop ">
                                            <div className="image is-3by1">
                                                <img src={mhLogo} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="title">Software Developer
                                        (Full-time)</p>
                                    <p className="subtitle">April 2018 - May
                                        2019 (1 year 2 months)</p>
                                    <p>
                                        After finishing the Computer Science
                                        degree, I was hired by Multihelpers.
                                        Thanks to my mentor Javier, I started to
                                        get into the world of clean software
                                        architecture, SOLID principles, DDD...
                                        trying to implement them in a legacy
                                        scenario to ease maintainability and
                                        reach scalability
                                    </p>
                                </div>
                            </div>
                            <div className="tile is-vertical is-parent">
                                <div className="tile is-child box">
                                    <div className="columns is-centered">
                                        <div className="column is-three-quarters-tablet is-half-desktop ">
                                            <div className="image is-3by1">
                                                <img src={HLZLogo} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="title">Backend Developer (Full-time)</p>
                                    <p className="subtitle">May 2019 - September
                                        2019 (5 months)
                                    </p>
                                    <p>
                                        I moved to <strong>Barcelona</strong> and I was hired by Holaluz, where I had
                                        the opportunity
                                        of being a part of an exceptional team. I
                                        was able to learn how a great company
                                        advocates doing things right, trying to
                                        maintain the quality of everything it
                                        does and also in an unbeatable work
                                        environment.
                                    </p>
                                </div>
                                <div className="tile is-child box">
                                    <div className="columns is-centered">
                                        <div className="column is-three-quarters-tablet is-half-desktop ">
                                            <div className="image is-3by1">
                                                <img src={mhLogo} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="title">
                                        Backend Team Leader
                                        (Full-time)
                                    </p>
                                    <p className="subtitle">
                                        September
                                        2019 - Present
                                    </p>
                                    <p className="content">
                                        For life's sake, I went back to Pamplona,
                                        and I thought the best place to work
                                        was Multihelpers.
                                        My goal: to try to apply everything I
                                        learned in this last stage
                                        in the first company that gave me the
                                        opportunity to grow professionally
                                    </p>
                                </div>
                                <div className="tile is-child notification is-primary is-light">
                                    <p className=" ">
                                        Contact me!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>}
            </div>
        )
    }
}

export default HistoryComponent;