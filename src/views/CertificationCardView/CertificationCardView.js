import React, { Component } from 'react';

import resumeData from '../../resumeData';
import Navigation from "../../components/Navigation";
import CertificationCardComponent from "../../components/CertificationCardComponent/CertificationCardComponent";
import Footer from "../../components/Footer";

class CertificationCardView extends Component {
    render() {
        return (
            <div className="certification-cards-view" style={{ background: "#f4f4f4", minHeight: "100vh" }}>
                <Navigation resumeData={resumeData} />
                <CertificationCardComponent resumeData={resumeData} />
                <Footer resumeData={resumeData} />
            </div>
        );
    }
}

export default CertificationCardView;
