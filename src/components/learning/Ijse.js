import React, {Component} from 'react';
// import Navigation from './components/Navigation';
import Button from 'react-bootstrap/Button';

import SwiftSlider from 'react-swift-slider'
import resumeData from '../../resumeData';
import Navigation from "../Navigation";
import Cards from "../LearningCards";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import {Player} from "video-react";


class Ijse extends Component {
    render() {
        const data =  [
            {'id':'1','src':'images/IJSE/1.jpg'},
            {'id':'2','src':'images/IJSE/2.jpg'},
            {'id':'3','src':'images/IJSE/3.jpg'},

        ];
        return (

            <section id="resume">
                <Navigation resumeData={resumeData}/>

                <div className="row education">




                    <div className="three columns header-col">
                        <h1><span>Description</span></h1>
                    </div>

                    <div className="ten columns main-col">
                        {
                            resumeData.leaningIjse && resumeData.leaningIjse.map((item)=>{
                                return(
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <ul>
                                                <li>{item.description}</li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row education">




                    <div className="three columns header-col">
                        <h1><span>Images</span></h1>
                    </div>

                    <div className="ten columns main-col">
                        <SwiftSlider data={data}/>

                    </div>
                </div>







                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Links</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {
                            resumeData.leaningIjseLinks && resumeData.leaningIjseLinks.map((item) => {
                                return(
                                    <div className="row item">
                                        <div className="twelve columns">
                                            {/*<h3>{item.specialization}<em className="date">({item.YearRange})</em></h3>*/}
                                            <p className="info">
                                                <a href={item.links}>{item.links}</a>
                                            </p>

                                        </div>

                                    </div>

                                )
                            })
                        }
                    </div>
                </div>




            </section>
        );
    }
}


export default Ijse
