import React, {Component} from 'react';

import SwiftSlider from 'react-swift-slider'
import resumeData from '../../resumeData';
import Navigation from "../Navigation";



class Esoft extends Component {
    render() {
        const data =  [
            {'id':'1','src':'images/ESOFT/1.jpg'},
            {'id':'2','src':'images/ESOFT/2.jpg'},

        ];



        return (

            <section id="resume">
                <Navigation resumeData={resumeData}/>

                <div className="row education">



                    <div className="three columns header-col">
                        <h1><span>Description</span></h1>
                    </div>

                    <div className="ten columns main-col">
                        {
                            resumeData.leaningKvns && resumeData.leaningEsoft.map((item)=>{
                                return(
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <ul>
                                                <li>{item.description}</li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row education">




                    <div className="three columns header-col">
                        <h1><span>Images</span></h1>
                    </div>

                    <div className="ten columns main-col">
                        <SwiftSlider data={data}/>

                    </div>
                </div>







                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Links</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {
                            resumeData.leaningEsoftLinks && resumeData.leaningEsoftLinks.map((item) => {
                                return(
                                    <div className="row item">
                                        <div className="twelve columns">
                                            {/*<h3>{item.specialization}<em className="date">({item.YearRange})</em></h3>*/}
                                            <p className="info">
                                                <a href={item.links}>{item.links}</a>
                                            </p>

                                        </div>

                                    </div>

                                )
                            })
                        }
                    </div>
                </div>




            </section>
        );
    }
}


export default Esoft
