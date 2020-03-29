import * as React from "react";

const CardComponent = ({logo, title, type, duration, content}) => (
    <div className="tile is-child box">
        <div className="columns is-centered">
            <div className="column is-three-quarters-tablet is-half-desktop ">
                <div className="image is-3by1">
                    <img src={logo} alt=""/>
                </div>
            </div>
        </div>
        <p className="title">
            {title} ({type})
        </p>
        <p className="subtitle">
            {duration}
        </p>
        <p className="content" dangerouslySetInnerHTML={{ __html: content }}>
        </p>

    </div>
);

export default CardComponent;