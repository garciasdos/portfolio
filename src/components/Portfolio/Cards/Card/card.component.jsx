import * as React from "react";

const CardComponent = ({logo, title, type, duration, content, className}) => (
    <div className={`tile is-child box ${className}`}>
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
        <p className="content has-text-justified" dangerouslySetInnerHTML={{ __html: content }}>
        </p>

    </div>
);

export default CardComponent;