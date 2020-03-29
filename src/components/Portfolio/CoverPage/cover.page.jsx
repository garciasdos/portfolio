import * as React from "react";
import './header.styles.css';
import CoverPageTitle from "./cover.page.title";
import HeroFooterLink from "../../Utils/hero.footer.link";
import avatar from "../../../avatar.jpeg";

const CoverPage = ({title, subtitle, target, clickFunction, isVisible}) => (
    isVisible &&
    <section className="hero-foo is-light is-fullheight">
        <div className="hero-head">
            <section className="hero">
                <div className="hero-body">
                    <CoverPageTitle title={title} subtitle={subtitle}/>
                </div>
            </section>
        </div>
        <HeroFooterLink type="light" text="Who am I?" target={target} clickFunction={clickFunction} />
    </section>
);

export default CoverPage;