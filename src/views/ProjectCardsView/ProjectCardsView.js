import React, { Component } from 'react';
import resumeData from '../../resumeData';
import Navigation from "../../components/Navigation";
import Cards from "../../components/ProjectCardComponent/ProjectCardComponent";
import Footer from "../../components/Footer";

class ProjectCardView extends Component {
    render() {
        return (
            <div
                className="ProjectCardsView"
                style={{
                    fontFamily: "'Roboto', sans-serif",
                    background: "#f9f9f9",
                }}
            >
                <Navigation resumeData={resumeData} />
                <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
                    <Cards resumeData={resumeData} />
                </main>
                <Footer resumeData={resumeData} />
            </div>
        );
    }
}

export default ProjectCardView;
