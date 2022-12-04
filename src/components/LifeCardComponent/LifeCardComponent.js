import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Col, Row} from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class LifeCardComponent extends Component {
    render() {
        AOS.init({
            duration: 2000,
        })
        let resumeData = this.props.resumeData;
        return (
            <section id="portfolio" style={{background:"#ffffff"}}>

                <h1 style={{fontSize:"25px",color:"#95A3A3"}}>My Life</h1>
                <Row style={{width:"100%", marginBottom:"20px"}}>

                    {
                        resumeData.blogCards && resumeData.blogCards.map((item)=>{
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

                                                <div style={{padding:"25px"}}>
                                                    <h5>{item.title}</h5>
                                                    <p style={{margin:"0px"}}>{item.subtitle}</p>
                                                </div>
                                            </Row>
                                            <Row style={{alignItems:'center', margin:"0px"}}>
                                                <Link to={`${item.router}`}>
                                                    <button  className="shadow" style={{position:"relative", width:"100%"}}>
                                                        Read
                                                    </button>
                                                </Link>
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