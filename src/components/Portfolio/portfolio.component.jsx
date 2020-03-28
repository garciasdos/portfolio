import * as React from "react";
import CoverPage from "./CoverPage/cover.page";
import Summary from "./summary/summary.component";
import CardsComponent from "./ProfessionalBackground/cards.component";
import {Events} from "react-scroll";

class PortfolioComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCoverPageVisible: true,
            isSummaryVisible: false,
            areCardsVisible: false
        }
    }

    showSummary = () => {
        this.setState({
            isSummaryVisible: true
        });
        Events.scrollEvent.register('end', () =>  {
            this.setState({
                isCoverPageVisible: false
            });
        });
    };

    showCards = () => {
        this.setState({
            areCardsVisible: true
        });
        Events.scrollEvent.register('end', () =>  {
            this.setState({
                isSummaryVisible: false
            });
        });
    };

    render() {
        return (
            <div>
                <CoverPage isVisible={this.state.isCoverPageVisible} target={"summary"} title={"Diego García"} subtitle={"Software Developer"} clickFunction={this.showSummary}/>
                <Summary id={"summary"} isVisible={this.state.isSummaryVisible} target={"cards"} clickFunction={this.showCards}/>
                <CardsComponent id={"cards"} visible={this.state.areCardsVisible}/>
            </div>
        )
    }
}

export default PortfolioComponent;