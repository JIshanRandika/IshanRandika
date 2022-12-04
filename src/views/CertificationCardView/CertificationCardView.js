import React, {Component} from 'react';

import resumeData from '../../resumeData';
import Navigation from "../../components/Navigation";
import Cards from "../../components/CertificationCardComponent/CertificationCardComponent";
import Footer from "../../components/Footer";


class CertificationCardView extends Component {
    render() {
        return (

            <div className="CertificationCardsView">

                <Navigation resumeData={resumeData}/>
                <Cards resumeData={resumeData}/>
                {/*<ContactUs resumeData={resumeData}/>*/}
                <Footer resumeData={resumeData}/>
            </div>


        );
    }
}

export default CertificationCardView
