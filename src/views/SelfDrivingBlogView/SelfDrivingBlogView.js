import React, {Component} from 'react';
// import Navigation from './components/Navigation';
import Button from 'react-bootstrap/Button';



import resumeData from '../../resumeData';
import Navigation from "../../components/Navigation";
import SelfDrivingBlog from "../../components/SelfDrivingBlogComponent/SelfDrivingBlogComponent";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";


class SelfDrivingBlogView extends Component {
    render() {
        return (


            <div className="BlogCardsView">



                <Navigation resumeData={resumeData}/>
                <SelfDrivingBlog resumeData={resumeData}/>
                {/*<ContactUs resumeData={resumeData}/>*/}
                <Footer resumeData={resumeData}/>
            </div>


        );
    }
}

export default SelfDrivingBlogView
