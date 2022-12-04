import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Col, Row} from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class CertificationCardComponent extends Component {
    render() {
        AOS.init({
            duration: 2000,
        })
        let resumeData = this.props.resumeData;
        return (
            <section id="portfolio" style={{background:"#ffffff"}}>

                <h1 style={{fontSize:"25px",color:"#95A3A3"}}>Certifications</h1>
                <Row style={{width:"100%", marginBottom:"20px"}}>

                    {
                        resumeData.certificationCards && resumeData.certificationCards.map((item)=>{
                            return(
                                <Col data-aos="fade-up"
                                    // data-aos-anchor-placement="bottom-bottom"
                                     data-aos-offset="100" md="3" xs="12" style={{width:"100%", background:"#ffffff", marginBottom:"20px"}}>
                                    {/*<Link to={`${item.router}`}>*/}

                                    <div className="shadow">

                                        <Col>
                                            <Row>
                                                <img style={{padding:"25px"}} src={`${item.imgurl}`}/>
                                            </Row>

                                            <Row>

                                                <div style={{padding:"25px",textAlign:"center"}}>
                                                    <h5>{item.title}</h5>
                                                    <p style={{margin:"0px"}}>{item.subtitle}</p>
                                                </div>
                                            </Row>
                                            <Row style={{alignItems:'center', margin:"0px"}}>
                                                {/*<Col md="6" xs="6">*/}
                                                {/*    <Link to={`${item.router}`}>*/}
                                                {/*        <button  className="shadow" style={{position:"relative", width:"100%", padding:"10px"}}>*/}
                                                {/*            Read*/}
                                                {/*        </button>*/}
                                                {/*    </Link>*/}

                                                {/*</Col>*/}
                                                <a style={{color:"white",width:"100%"}} href={item.web} target="_blank">
                                                <button  className="shadow" style={{position:"relative", width:"100%"}}>
                                                    View
                                                </button>
                                                </a>
                                                {/*<Col md="6" xs="6">*/}
                                                {/*    <a href={`${item.web}`} target="_blank">*/}
                                                {/*        <button  className="shadow" style={{position:"relative", width:"100%", padding:"10px"}}>*/}
                                                {/*            View*/}
                                                {/*        </button>*/}
                                                {/*    </a>*/}
                                                {/*</Col>*/}

                                            </Row>
                                        </Col>

                                    </div>

                                </Col>
                            )
                        })
                    }

                </Row>

            </section>
        );
    }
}