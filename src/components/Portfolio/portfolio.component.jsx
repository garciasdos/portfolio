import * as React from "react";
import CoverPage from "./CoverPage/cover.page";
import Summary from "./summary/summary.component";
import CardsComponent from "./Cards/cards.component";
import SocialButtons from "../SocialButtons/social.buttons.component";

class PortfolioComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCoverPageVisible: true,
            isSummaryVisible: false,
            areCardsVisible: false,
            isContactPageVisible: false
        }
    }

    showSummary = () => {
        this.setState({
            isSummaryVisible: true
        });
    };

    showCards = () => {
        this.setState({
            areCardsVisible: true
        });
    };

    showContactPage = () => {
        this.setState({
            isContactPageVisible: true
        });
    };

    render() {
        return (
            <div>
                <CoverPage isVisible={this.state.isCoverPageVisible} target={"summary"} title={"Diego García"} subtitle={"Software Developer"} clickFunction={this.showSummary}/>
                <Summary id={"summary"} isVisible={this.state.isSummaryVisible} target={"cards"} clickFunction={this.showCards}/>
                <CardsComponent id={"cards"} visible={this.state.areCardsVisible} contactPage={"contact"} clickFunction={this.showContactPage}/>
                <SocialButtons id="contact" visible={this.state.isContactPageVisible}/>
            </div>
        )
    }
}

export default PortfolioComponent;