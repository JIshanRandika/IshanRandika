import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Col, Row} from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class ProjectCardComponent extends Component {
    render() {
        AOS.init({
            duration: 2000,
        })
        let resumeData = this.props.resumeData;
        return (
            <section id="portfolio" style={{background:"#ffffff"}}>

                <h1 style={{fontSize:"25px",color:"#95A3A3"}}>Projects</h1>
                <Row style={{width:"100%", marginBottom:"20px"}}>

                    {
                        resumeData.projectsCards && resumeData.projectsCards.map((item)=>{
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

                                                <div style={{padding:"25px", textAlign:"center"}}>
                                                    <h5>{item.title}</h5>
                                                    <p style={{margin:"0px"}}>{item.subtitle}</p>
                                                </div>
                                            </Row>
                                            <Row style={{alignItems:'center', margin:"0px",  width:"100%"}}>
                                                {/*<Link to={`${item.router}`} style={{ width:"100%"}}>*/}
                                                {/*    <button  className="shadow" style={{position:"relative", width:"100%"}}>*/}
                                                {/*        View*/}
                                                {/*    </button>*/}
                                                {/*</Link>*/}

                                                {item.router==="#"?
                                                    <a style={{color:"white",width:"100%"}} href={item.router} target="_blank">
                                                        <button  disabled={item.router=="#"} className="shadow" style={{position:"relative", width:"100%",
                                                            background:item.router=="#" ? "gray": 'white',
                                                            "&:hover": {
                                                                background: "blue",
                                                            },
                                                        }}>
                                                            View
                                                        </button>
                                                    </a>
                                                    :
                                                    <a style={{color:"white",width:"100%"}} href={item.router} target="_blank">
                                                        <button  disabled={item.router=="#"} className="shadow" style={{position:"relative", width:"100%",
                                                            color:item.router=="#" ? "gray": 'white',
                                                            "&:hover": {
                                                                background: "blue",
                                                            },
                                                        }}>
                                                            View
                                                        </button>
                                                    </a>
                                                }

                                                {/*<a style={{color:"white",width:"100%"}} href={item.router}>*/}
                                                {/*    <button  className="shadow" style={{position:"relative", width:"100%"}}>*/}
                                                {/*        View*/}
                                                {/*    </button>*/}
                                                {/*</a>*/}
                                                {/*<Link to={`${item.router}`}>*/}
                                                {/*    <button  className="shadow" style={{position:"relative", width:"100%"}}>*/}
                                                {/*        Read*/}
                                                {/*    </button>*/}
                                                {/*</Link>*/}
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
