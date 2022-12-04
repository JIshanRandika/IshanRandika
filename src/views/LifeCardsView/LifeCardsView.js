import React, {Component} from 'react';

import resumeData from '../../resumeData';
import Navigation from "../../components/Navigation";
import Cards from "../../components/LifeCardComponent/LifeCardComponent";
import Footer from "../../components/Footer";


class LifeCardsView extends Component {
    render() {
        return (

            <div className="ProjectCardsView">

                <Navigation resumeData={resumeData}/>
                <Cards resumeData={resumeData}/>
                {/*<ContactUs resumeData={resumeData}/>*/}
                <Footer resumeData={resumeData}/>
            </div>


        );
    }
}

export default LifeCardsView
