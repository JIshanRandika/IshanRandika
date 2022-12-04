import React, {Component} from 'react';
// import Navigation from './components/Navigation';
import Button from 'react-bootstrap/Button';



import resumeData from '../../resumeData';
import Navigation from "../../components/Navigation";
import ContactVoletProjectComponent from "../../components/ContactVoletProjectComponent/ContactVoletProjectComponent";

import Footer from "../../components/Footer";


class ContactVoletProjectView extends Component {
    render() {
        return (


            <div className="BlogCardsView">



                <Navigation resumeData={resumeData}/>
                <ContactVoletProjectComponent resumeData={resumeData}/>
                {/*<ContactUs resumeData={resumeData}/>*/}
                <Footer resumeData={resumeData}/>
            </div>


        );
    }
}

export default ContactVoletProjectView
