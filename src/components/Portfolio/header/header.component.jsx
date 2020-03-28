import * as React from "react";
import { Link } from 'react-scroll';
import './header.styles.css';

class HeaderComponent extends React.Component {
    render() {
        return (
            <section className="hero is-success is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">
                            {this.props.name}
                        </h1>
                        <h2 className="subtitle">
                            {this.props.title}
                        </h2>
                    </div>
                </div>
                <Link smooth={true}  to={this.props.targetId}>
                    <div className="hero-foot" onClick={this.props.click}>
                        <section className="hero">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <p className="title">
                                        Who am I?
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </Link>
            </section>
        );
    }
}

export default HeaderComponent;