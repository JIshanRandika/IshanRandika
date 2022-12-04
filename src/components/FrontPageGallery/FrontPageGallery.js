import React from "react";
import {
    Row,Col,Container
} from "reactstrap";
import FrontPageGalleryComponent from "../FrontPageGalleryComponent/FrontPageGalleryComponent.js";
import { Form, Button } from 'react-bootstrap';

class FrontPageGallery extends React.Component {
    state = {};
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="resume">
                {/*<div className="row">*/}
                {/*<Container style={{}}>*/}
                    <div style={{width:"100%"}} className="three columns header-col">
                        <h1><span>Photo Gallery</span></h1>
                    </div>

                    {/*<Row style={{width:"100%",height:"500px"}}>*/}
                        <FrontPageGalleryComponent/>
                    {/*</Row>*/}
                {/*</Container>*/}
                {/*</div>*/}
            </section>
        );
    }
}

export default FrontPageGallery;
