import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Col, Row} from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class ResumeComponent extends Component {
    render() {
        AOS.init({
            duration: 2000,
        })
        let resumeData = this.props.resumeData;
        return (
            <section id="resume">
                <div style={{width:"100%", textAlign:"center", marginBottom:"60px"}}>
                    <h1 style={{fontSize:"25px",color:"#95A3A3"}}>Resume</h1>
                </div>
                <div className="row education">
                    <a style={{color:"white",width:"100%"}} href="https://drive.google.com/file/d/1BCrBG931v9uTpGO7JjrJnCfnJtpQvQl6/view?usp=sharing" target="_blank">
                        <button  className="shadow" style={{position:"relative", width:"30%"}}>
                            Download Resume
                        </button>
                    </a>
                    {/*<Link to={`https://drive.google.com/file/d/1tBBo4RThufPKw3NliCeV6Y2wZSFkcyZ6/view?usp=sharing`} style={{ width:"100%"}}>*/}
                    {/*    <button  className="shadow" style={{position:"relative", width:"30%"}}>*/}
                    {/*        Download Resume*/}
                    {/*    </button>*/}
                    {/*</Link>*/}
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="ten columns main-col">
                        {
                            resumeData.education && resumeData.education.map((item)=>{
                                return(
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3><a href={item.web}>{item.UniversityName}</a> <em className="date">({item.YearRange})</em></h3>

                                            <div className="info">
                                                {item.specialization}
                                            </div>
                                            {item.Achievements}
                                            <p>
                                                {item.Discription}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Experience</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {
                            resumeData.work && resumeData.work.map((item) => {
                                return(
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3>{item.specialization}<em className="date">({item.YearRange})</em></h3>
                                            <p className="info">
                                                <a href={item.web}>{item.CompanyName}</a>
                                            </p>
                                            <p>
                                                {item.Achievements}
                                            </p>
                                            <p>
                                                {item.Description}
                                            </p>
                                        </div>

                                    </div>

                                )
                            })
                        }
                    </div>
                </div>


                <div className="row skill">

                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className="nine columns main-col">

                        <p>
                            {/*{resumeData.skillsDescription}*/}
                        </p>

                        <div className="bars" style={{width:"100%"}}>

                            <ul className="skills">
                                {
                                    resumeData.skills && resumeData.skills.map((item) => {
                                        return(
                                            <li>
                                                <span className={`bar-expand ${item.skillname.toLowerCase()}`}>

                                                </span>
                                                <em>{item.skillname}</em>
                                            </li>
                                        )
                                    })
                                }

                            </ul>

                        </div>

                    </div>

                </div>

            </section>
        );
    }
}
