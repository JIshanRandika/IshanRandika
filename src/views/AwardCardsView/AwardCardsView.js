import React, {Component} from 'react';

import resumeData from '../../resumeData';
import Navigation from "../../components/Navigation";
import Cards from "../../components/AwardCardComponent/AwardCardComponent";
import Footer from "../../components/Footer";


class AwardCardView extends Component {
    render() {
        return (

            <div className="AwardCardsView">

                <Navigation resumeData={resumeData}/>
                <Cards resumeData={resumeData}/>
                {/*<ContactUs resumeData={resumeData}/>*/}
                <Footer resumeData={resumeData}/>
            </div>


        );
    }
}

export default AwardCardView
