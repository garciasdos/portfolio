import * as React from "react";

class CardComponent extends React.Component {
    render() {
        return (
                <div className="tile is-child box">
                    <div className="columns is-centered">
                        <div className="column is-three-quarters-tablet is-half-desktop ">
                            <div className="image is-3by1">
                                <img src={this.props.logo} alt=""/>
                            </div>
                        </div>
                    </div>
                    <p className="title">
                        {this.props.title} ({this.props.type})
                    </p>
                    <p className="subtitle">
                        {this.props.duration}
                    </p>
                    <p className="content">
                        {this.props.content}
                    </p>

            </div>
        );
    }
}

export default CardComponent;