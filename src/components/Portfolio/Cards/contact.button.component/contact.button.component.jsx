import React from "react";
import {Link} from "react-scroll";

const ContactButton = ({target, clickFunction}) => (
    <Link smooth={true} to={target}>
        <div className="tile is-child box has-text-centered" onClick={clickFunction}>
            <p className="is-size-4 is-capitalized has-text-weight-semibold">
                Contact
            </p>
        </div>
    </Link>);

export default ContactButton;