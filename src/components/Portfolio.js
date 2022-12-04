import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {
  Row,Col
} from "reactstrap";

export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio" style={{background:"#ffffff",height:"100%",marginBottom:"50px"}}>
          <h1 style={{fontSize:"20px"}}>Check Out Some of My Works.</h1>
        <Row style={{width:"100%"}}>

              {
                  resumeData.portfolio && resumeData.portfolio.map((item)=>{
                      return(
                          <Col md="3" xs="12" style={{width:"100%", background:"#ffffff",marginBottom:"30px"}}>
                          <Link to={`${item.router}`}>
                              <div style={{padding:"10px"}} className="portfolio-item shadow">
                                  {/*<div className="columns portfolio-item">*/}
                                  <div className="item-wrap">
                                      <img src={`${item.imgurl}`}  className="item-img"/>
                                      {/*<link href="%PUBLIC_URL%/css/layout.css"></link>*/}
                                      <div className="overlay">
                                          <div className="portfolio-item-meta">
                                              <h5>{item.date}</h5>
                                              <p>{item.description}</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </Link>
                          </Col>
                      )
                  })
              }


        </Row>

      {/*<div className="row">*/}
      {/*  <div className="twelve columns collapsed">*/}
      {/*    <h1>Check Out Some of My Works.</h1>*/}
      {/*    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">*/}
      {/*    {*/}
      {/*      resumeData.portfolio && resumeData.portfolio.map((item)=>{*/}
      {/*        return(*/}

      {/*                <Link to={`${item.router}`}>*/}
      {/*                  <div className="portfolio-item">*/}
      {/*                    /!*<div className="columns portfolio-item">*!/*/}
      {/*                    <div className="item-wrap">*/}
      {/*                      <img src={`${item.imgurl}`} className="item-img"/>*/}
      {/*                      /!*<link href="%PUBLIC_URL%/css/layout.css"></link>*!/*/}
      {/*                      <div className="overlay">*/}
      {/*                        <div className="portfolio-item-meta">*/}
      {/*                          <h5>{item.date}</h5>*/}
      {/*                          <p>{item.description}</p>*/}
      {/*                        </div>*/}
      {/*                      </div>*/}
      {/*                    </div>*/}
      {/*                  </div>*/}
      {/*                </Link>*/}

      {/*        )*/}
      {/*      })*/}
      {/*    }*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
  </section>
        );
  }
}