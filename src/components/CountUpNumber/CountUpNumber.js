import React from "react";
import {Button, Container, Row, Col} from "reactstrap";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'

class CountUpNumber extends React.Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <>
                <section id="portfolio" style={{background:"white", paddingTop:"200px"}} className="section section-lg pt-0">
                    {/*<Container>*/}
                    <h1 style={{fontSize:"20px", paddingTop:"100px",fontWeight:"bold"}}>facts</h1>

                    <Row>
                            {
                                resumeData.countUpNumber.map((item)=>{
                                    return(

                                        <Col md="3" xs="12" className="text-center">
                                            <CountUp end={`${item.CountEnd}`} redraw={true} >
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} className="display-1"  style={{ color: "#1e44a5",fontWeight:"bold" }}/>
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                            <p style={{fontSize:"x-large",fontWeight:"bold"}}>{item.CountTitle}</p>

                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    {/*</Container>*/}
                </section>
            </>
        );
    }
}

export default CountUpNumber;
