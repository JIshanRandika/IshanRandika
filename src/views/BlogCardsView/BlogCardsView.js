import React, {Component} from 'react';

import resumeData from '../../resumeData';
import Navigation from "../../components/Navigation";
import Cards from "../../components/BlogCardComponent/BlogCardComponent";
import Footer from "../../components/Footer";


class BlogCardsView extends Component {
    render() {
        return (


            <div className="BlogCardsView">



                <Navigation resumeData={resumeData}/>
                <Cards resumeData={resumeData}/>
                {/*<ContactUs resumeData={resumeData}/>*/}
                <Footer resumeData={resumeData}/>
            </div>


        );
    }
}

export default BlogCardsView
