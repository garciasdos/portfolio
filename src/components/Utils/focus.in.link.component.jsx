import * as React from "react";
import {Link} from "react-scroll";
import "./hero.footer.link.css";
import "./focus.in.link.style.sass";

const FocusInLink = ({target, clickFunction, type, text}) => {
    return (
        <button className="button text-focus-in is-medium is-inverted is-outlined">
            <Link smooth={true} to={target}>
                <div onClick={clickFunction}>
                    {text}
                </div>
            </Link>
        </button>
    );
};

export default FocusInLink;