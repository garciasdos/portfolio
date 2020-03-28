import React from 'react';

class Summary extends React.Component {
    render() {
        return (
            <div id={this.props.id}>
                {this.props.visible && <section className="hero is-primary is-fullheight is-bold">
                    <div className="hero-body">
                        <div className="container">
                            <p className="title">
                                Hey! I'm Diego.
                            </p>
                            <p className="is-size-3">
                                I'm (mainly) a <strong>backend developer</strong> who believes that things can really be
                                done
                                right. I'm a fan of
                                terms like <strong>Clean Architecture</strong>, <strong>SOLID
                                principles</strong>, <strong>agile</strong>... Trying to apply everything I know on a
                                daily basis to improve both the product and myself.
                            </p>
                        </div>
                    </div>
                </section>}
            </div>
        )
    }
}

export default Summary;