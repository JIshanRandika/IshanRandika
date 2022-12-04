import React, {Component} from 'react';
// import Navigation from './components/Navigation';
import Button from 'react-bootstrap/Button';



import resumeData from '../../resumeData';
import Navigation from "../../components/Navigation";
import AzureFundamentalCerificationComponent from "../../components/AzureFundamentalCerificationComponent/AzureFundamentalCerificationComponent";

import Footer from "../../components/Footer";


class SelfDrivingBlogView extends Component {
    render() {
        return (


            <div className="BlogCardsView">



                <Navigation resumeData={resumeData}/>
                <AzureFundamentalCerificationComponent resumeData={resumeData}/>
                {/*<ContactUs resumeData={resumeData}/>*/}
                <Footer resumeData={resumeData}/>
            </div>


        );
    }
}

export default SelfDrivingBlogView
