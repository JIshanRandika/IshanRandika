import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';


import resumeData from './resumeData';
import Navigation from "./components/Navigation";
import Cards from "./components/LearningCards";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";


class Learning extends Component {
    render() {
        return (


            <div className="Learning">



                <Navigation resumeData={resumeData}/>
                <Cards resumeData={resumeData}/>

            </div>


        );
    }
}

export default Learning
