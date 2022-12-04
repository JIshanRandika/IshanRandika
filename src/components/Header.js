import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Navigation from './Navigation';
import Clock from 'react-digital-clock';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Row,Col} from "react-bootstrap";
// import('./components/Navigation').then(Navigation => Navigation.default);
export default class Header extends Component {
  render() {
      AOS.init({
          duration: 2000,
      })
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">

         {/*<nav  id="nav-wrap" style={{ display:"block"}}>*/}
         {/*   <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>*/}
         {/*   <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>*/}

<Navigation/>
         {/*            <ul id="nav" className="nav" style={{alignContent:"center",display:"block"}}>*/}
         {/*                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>*/}
         {/*                <li><a className="smoothscroll" href="#about">About</a></li>*/}
         {/*                <li><a className="smoothscroll" href="portfolio">Gallery</a></li>*/}
         {/*                <li><Link to={`/blogCards`}><a className="smoothscroll" href="">Blogs</a></Link></li>*/}
         {/*                <li><a className="smoothscroll" href="#portfolio">Resume</a></li>*/}
         {/*                <li><a className="smoothscroll" href="#testimonials">Cerfications</a></li>*/}
         {/*                <li><a className="smoothscroll" href="#contact">Honors & Awards</a></li>*/}
         {/*                <li><a className="smoothscroll" href="#contact">Projects</a></li>*/}
         {/*                <li><a className="smoothscroll" href="#contact">Life</a></li>*/}
         {/*                <li><a className="smoothscroll" href="#contact">Services</a></li>*/}
         {/*                <li><a className="smoothscroll" href="#contact">My Updates</a></li>*/}
         {/*            </ul>*/}

         {/*</nav>*/}

         <div className="row banner">
            <div className="banner-text">
               <h1 data-aos="fade-up"
                   data-aos-offset="100" md="3" xs="12"
                   className="responsive-headline">{resumeData.name}</h1>
               <h2 data-aos="fade-up"
                   data-aos-offset="100" md="3" xs="12"
                   style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.currentRole}
               </h2>
                <h6
                    data-aos="fade-up"
                    data-aos-offset="100" md="3" xs="12"
                    style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.otherTitles}
                </h6>

               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(

                              <li data-aos="fade-up"
                                  data-aos-offset="100" md="3" xs="12"
                                  key={item.date}>
                                <a href={item.url} target="_blank"><i className={item.className} aria-hidden="true"></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
                <h4 data-aos="fade-up"
                    data-aos-offset="100" md="3" xs="12"
                >
                    <Clock/>
                </h4>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}