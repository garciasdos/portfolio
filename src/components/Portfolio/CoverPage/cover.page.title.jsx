import React from "react";

const CoverPageTitle = ({title, subtitle}) => (
    <div className="container">
        <h1 className="title">
            {title}
        </h1>
        <h2 className="subtitle">
            {subtitle}
        </h2>
    </div>
);

export default CoverPageTitle;