import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Col, Row} from "reactstrap";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './testimonial2.css';


export default class TestimonialComponent2 extends Component {

    render() {
        //
        // AOS.init({
        //     duration: 2000,
        // })
        let resumeData = this.props.resumeData;
        return (
            <div className="container" style={{background:"white", marginTop:"200px"}}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                            <div className="carousel-inner text-center">
                                <div className="item active">
                                    <blockquote>
                                        <div className="row">
                                            <div className="col-sm-8 col-sm-offset-2">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. !</p>
                                                <small>Someone famous</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote>
                                        <div className="row">
                                            <div className="col-sm-8 col-sm-offset-2">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. </p>
                                                <small>Someone famous</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote>
                                        <div className="row">
                                            <div className="col-sm-8 col-sm-offset-2">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. .</p>
                                                <small>Someone famous</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                            <ol className="carousel-indicators">
                                <li data-target="#quote-carousel" data-slide-to="0" className="active"><img
                                    className="img-responsive "
                                    src="https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg" alt=""/>
                                </li>
                                <li data-target="#quote-carousel" data-slide-to="1"><img className="img-responsive"
                                                                                         src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
                                                                                         alt=""/>
                                </li>
                                <li data-target="#quote-carousel" data-slide-to="2"><img className="img-responsive"
                                                                                         src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg"
                                                                                         alt=""/>
                                </li>
                            </ol>

                            <a data-slide="prev" href="#quote-carousel" className="left carousel-control"><i
                                className="fa fa-chevron-left"></i></a>
                            <a data-slide="next" href="#quote-carousel" className="right carousel-control"><i
                                className="fa fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <a className="btn btn-primary"
                   href="http://thecodeblock.com/create-a-quote-testimonial-slider-using-bootstrap-carousel"><i
                    className="fa fa-arrow-left"></i> Back to Article</a>
            </div>
        );
    }
}