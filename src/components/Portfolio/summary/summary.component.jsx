import React from 'react';
import FocusInLink from "../../Utils/focus.in.link.component";

const Summary = ({id, isVisible, target, clickFunction}) => (
    <div id={id}>
        {isVisible &&
        <section className="hero is-light is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <p className="title">
                        Hey! I'm Diego.
                    </p>
                    <p className="is-size-3 has-text-justified">
                        I'm (mainly) a <strong>backend developer</strong> who believes that things can really be
                        done
                        right. I'm a fan of
                        terms like <strong>Clean Architecture</strong>, <strong>SOLID
                        principles</strong>, <strong>agile</strong>... Trying to apply everything I know on a
                        daily basis to improve both the product and myself.
                    </p>
                    <div className="has-text-centered m-t-lg">
                        <FocusInLink type="dark" text="Ok then, so where have I been working? 🤔" target={target} clickFunction={clickFunction} />
                    </div>
                </div>
            </div>
        </section>}
    </div>
);

export default Summary;