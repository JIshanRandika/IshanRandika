import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';



import resumeData from './resumeData';
import Navigation from "./components/Navigation";
import Cards from "./components/MyLifeCards";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import FrontPageGallery from "./components/FrontPageGallery/FrontPageGallery";


class MyLife extends Component {
    render() {
        return (


            <div className="MyLife">



                <Navigation resumeData={resumeData}/>
                <Cards resumeData={resumeData}/>
                <FrontPageGallery resumeData={resumeData}/>


            </div>


        );
    }
}

export default MyLife
