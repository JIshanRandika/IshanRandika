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


class Self extends Component {
    render() {
        const data =  [
            {'id':'1','src':'images/Self/1.jpg'},
            {'id':'2','src':'images/Self/2.jpg'},
            {'id':'3','src':'images/Self/3.jpg'},
            {'id':'4','src':'images/Self/4.jpg'},
            {'id':'5','src':'images/Self/5.jpg'}
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
                            resumeData.leaningSelf && resumeData.leaningSelf.map((item)=>{
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


            </section>
        );
    }
}


export default Self
