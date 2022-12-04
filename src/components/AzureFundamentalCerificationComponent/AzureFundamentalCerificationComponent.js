import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Col, Row} from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class AzureFundamentalCerificationComponent extends Component {
    render() {
        AOS.init({
            duration: 2000,
        })
        let resumeData = this.props.resumeData;
        return (
            <section id="resume">
                <div style={{width:"100%", textAlign:"center", marginBottom:"60px"}}>
                    <h1 style={{fontSize:"25px",color:"#95A3A3"}}>Azure Fundamental Certification</h1>
                    <img style={{padding:"25px", width:"30%"}} src="images/CertificationCards/AzureFundamentalCertification.jpg"/>

                </div>
                <div className="row education">

                    <div className="ten columns main-col">

                        <div className="row item">
                            <div className="twelve columns">
                                <h3><a>Microsoft Certified: Azure Fundamentals</a></h3>

                                <p style={{textAlign:"justify"}}>
                                    Issued by Microsoft
                                    Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure. Candidates for this exam should have foundational knowledge of cloud services and how those services are provided with Microsoft Azure. The exam is intended for candidates who are just beginning to work with cloud-based solutions and services or are new to Azure.

                                    Azure Fundamentals exam is an opportunity to prove knowledge of cloud concepts, Azure services, Azure workloads, security and privacy in Azure, as well as Azure pricing and support. Candidates should be familiar with the general technology concepts, including concepts of networking, storage, compute, application support, and application development.

                                    Azure Fundamentals can be used to prepare for other Azure role-based or specialty certifications, but it is not a prerequisite for any of them.                                </p>
                                <img style={{padding:"25px"}} src="images/CertificationCards/Certificate.jpg"/>
                                <img style={{padding:"25px"}} src="images/CertificationCards/results.jpg"/>

                            </div>
                        </div>





                    </div>
                </div>


            </section>
        );
    }
}