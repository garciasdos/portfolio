import * as React from "react";
import HeaderComponent from "./header/header.component";
import Summary from "./summary/summary.component";
import CardsComponent from "./ProfessionalBackground/cards.component";

class PortfolioComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSummaryVisible: false
        }
    }

    showSummary = () => {
        this.setState({
            isSummaryVisible: true
        });
    };

    render() {
        return (
            <div>
                <HeaderComponent targetId={"summary"} name={"Diego García"} title={"Software Developer"} click={this.showSummary}/>
                <Summary id={"summary"} visible={this.state.isSummaryVisible}/>
                <CardsComponent id={"summary"} visible={true}/>
            </div>
        )
    }
}

export default PortfolioComponent;