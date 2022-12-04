import React, {Component} from 'react';
// import Navigation from './components/Navigation';
import Button from 'react-bootstrap/Button';
    // import "/node_modules/video-react/dist/video-react.css";

import { Player } from 'video-react';
import ReactPlayer from 'react-player'
import YouTubePlayer from 'react-player/lib/players/YouTube'
// or less ideally
// import { Button } from 'react-bootstrap';

import resumeData from '../../resumeData';
import Navigation from "../Navigation";
import Cards from "../LearningCards";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
var VIDEOS = {
    deer: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    snail: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    cat: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    spider: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class Betting extends Component {



//--------------------------------------------

    render() {
        return (

            <section id="resume">
                <Navigation resumeData={resumeData}/>

                <div className="row education">

                    <div className="three columns header-col">
                        <h1><span>Description</span></h1>
                    </div>

                    <div className="ten columns main-col">
                        {
                            resumeData.project && resumeData.project.map((item)=>{
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
                        <h1><span>Video</span></h1>
                    </div>

                    <div className="ten columns main-col">

                        <YouTubePlayer
                            url='https://www.youtube.com/watch?v=vQhSIFCsfr8'
                            playing
                            controls
                            // Other ReactPlayer props will work here
                        />


                    </div>
                </div>


                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Links</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {
                            resumeData.projectLinks && resumeData.projectLinks.map((item) => {
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

export default Betting
