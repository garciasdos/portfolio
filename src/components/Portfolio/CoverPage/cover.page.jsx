import * as React from "react";
import './header.styles.css';
import CoverPageTitle from "./cover.page.title";
import HeroFooterLink from "../../Utils/hero.footer.link";

const CoverPage = ({title, subtitle, target, clickFunction, isVisible}) => (
    isVisible &&
    <section className="hero is-success is-fullheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <CoverPageTitle title={title} subtitle={subtitle}/>
            </div>
        </div>
        <HeroFooterLink target={target} clickFunction={clickFunction}/>
    </section>
);

export default CoverPage;