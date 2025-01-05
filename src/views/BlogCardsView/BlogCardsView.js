import React, { Component } from 'react';

import resumeData from '../../resumeData';
import Navigation from "../../components/Navigation";
import BlogCardComponent from "../../components/BlogCardComponent/BlogCardComponent";
import Footer from "../../components/Footer";

class BlogCardsView extends Component {
    render() {
        return (
            <div className="BlogCardsView" style={{ fontFamily: "'Poppins', sans-serif", background: "#f4f4f4" }}>
                <Navigation resumeData={resumeData} />
                <main style={{ paddingTop: "70px" }}>
                    <BlogCardComponent resumeData={resumeData} />
                </main>
                <Footer resumeData={resumeData} />
            </div>
        );
    }
}

export default BlogCardsView;
