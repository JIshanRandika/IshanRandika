 import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Col, Row} from "reactstrap";
import AOS from 'aos';
import ResponsiveEmbed from 'react-responsive-embed';
import 'aos/dist/aos.css';

export default class BettingProjectComponent extends Component {
    render() {
        AOS.init({
            duration: 2000,
        })
        let resumeData = this.props.resumeData;
        return (
            <section id="resume">
                <div style={{width:"100%", textAlign:"center", marginBottom:"60px"}}>
                    <h1 style={{fontSize:"25px",color:"#95A3A3"}}>Standalone Application for a Betting Complex</h1>
                    <img style={{padding:"25px", width:"30%"}} src="images/ProjectCards/projectCard1.jpg"/>

                </div>
                <div className="row education">

                    <div className="ten columns main-col">

                        <div className="row item">
                            <div className="twelve columns">
                                <h3><a>Description</a></h3>

                                <p style={{textAlign:"justify"}}>
                                    This project did for the final project in IJSE as a new concept. I developed this application for a swimming competition complex using JAVA SE. This application is for any betting complex to manage the all competitions, competitors, judgers and spectators.
                                </p>
                                {/*<ResponsiveEmbed src='https://www.youtube.com/embed/2yqz9zgoC-U' allowfullscreen />*/}
                                {/*<div*/}
                                {/*    style="position:relative;height:0;overflow:hidden;max-width:100%;padding-bottom:56.25%;">*/}
                                {/*    <iframe src="https://www.youtube.com/embed/2yqz9zgoC-U"*/}
                                {/*            style="position:absolute;top:0;left:0;width:100%;height:100%;"*/}
                                {/*            frameBorder="0"*/}
                                {/*            allowFullScreen>*/}
                                {/*        */}
                                {/*    </iframe>*/}
                                {/*</div>*/}
                                {/*<img style={{padding:"25px"}} src="images/CertificationCards/Certificate.jpg"/>*/}
                                {/*<img style={{padding:"25px"}} src="images/CertificationCards/results.jpg"/>*/}

                            </div>
                        </div>


                        <ResponsiveEmbed src='https://www.youtube.com/embed/vQhSIFCsfr8&t=2s' allowfullscreen />
                        {/*https://www.youtube.com/watch?v=2yqz9zgoC-U*/}
                        {/*https://www.youtube.com/watch?v=vQhSIFCsfr8&t=2s*/}
                    </div>

                    {/*<div className="row item">*/}
                    {/*    <div className="twelve columns">*/}
                    {/*        <ResponsiveEmbed src='https://www.youtube.com/embed/2yqz9zgoC-U' allowfullscreen />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>


            </section>
        );
    }
}
