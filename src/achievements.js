import React, {Component} from 'react';
// import Navigation from './components/Navigation';
import Button from 'react-bootstrap/Button';





import resumeData from './resumeData';
import Navigation from "./components/Navigation";
import Cards from "./components/AchievementsCards";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";


class Achievements extends Component {
    render() {
        return (


            <div className="Achievements">



                <Navigation resumeData={resumeData}/>
                <Cards resumeData={resumeData}/>

            </div>


        );
    }
}

export default Achievements
