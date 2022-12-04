import React, {Component} from 'react';
// import Navigation from './components/Navigation';
import Button from 'react-bootstrap/Button';



import resumeData from '../../resumeData';
import Navigation from "../../components/Navigation";
import TestimonialComponent from "../../components/TestimonialComponent/TestimonialComponent";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";


class TestimonialView extends Component {
    render() {
        return (


            <div className="BlogCardsView">



                <Navigation resumeData={resumeData}/>
                <TestimonialComponent resumeData={resumeData}/>
                {/*<ContactUs resumeData={resumeData}/>*/}
                <Footer resumeData={resumeData}/>
            </div>


        );
    }
}

export default TestimonialView
