import React, {Component} from 'react';
// import Navigation from './components/Navigation';
import Button from 'react-bootstrap/Button';



import resumeData from '../../resumeData';
import Navigation from "../../components/Navigation";
import BettingProjectComponent from "../../components/BettingProjectComponent/BettingProjectComponent";

import Footer from "../../components/Footer";


class SelfDrivingBlogView extends Component {
    render() {
        return (


            <div className="BlogCardsView">



                <Navigation resumeData={resumeData}/>
                <BettingProjectComponent resumeData={resumeData}/>
                {/*<ContactUs resumeData={resumeData}/>*/}
                <Footer resumeData={resumeData}/>
            </div>


        );
    }
}

export default SelfDrivingBlogView
