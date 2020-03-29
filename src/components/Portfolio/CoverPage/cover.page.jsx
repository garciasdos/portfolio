import * as React from "react";
import './header.styles.css';
import CoverPageTitle from "./cover.page.title";
import FocusInLink from "../../Utils/focus.in.link.component";
import avatar from "../../../avatar.jpeg";

const CoverPage = ({title, subtitle, target, clickFunction, isVisible}) => (
    isVisible &&
    <section className="hero-foo is-light is-fullheight">
        <div className="hero-head">
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                    <CoverPageTitle title={title} subtitle={subtitle}/>
                    </div>
                </div>
            </section>
        </div>
            <div className="container has-text-centered">
                <FocusInLink type="dark" text="Who am I?" target={target} clickFunction={clickFunction} />
            </div>
    </section>
);

export default CoverPage;