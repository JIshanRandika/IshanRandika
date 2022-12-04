import React, {Component} from 'react';
import SideNav from 'react-simple-sidenav';
// import resumeData from './resumeData';
// import Navigation from "./components/Navigation";
// import SideBar from "react-sidebar";
// import ReactDOM from "react-dom";
// import SideNav from './side-nav/SideNav'
import "./sideNav.css"
import resumeData from "./resumeData";
import Navigation from "./components/Navigation";
class Testing extends Component {

    state = {
        state: {
            showNav: false
        }
    }

    openNavClick = e => {
        e.preventDefault()
        this.openNav()
    }

    closeNavClick = e => {
        e.preventDefault()
        this.closeNav()
    }

    openNav = () => {
        this.setState({
            showNav: true
        })

        document.addEventListener("keydown", this.handleEscKey)
    }
    closeNav = () => {
        this.setState({
            showNav: false
        })

        document.removeEventListener("keydown", this.handleEscKey)
    }

    handleEscKey = e => {
        if (e.key === "Escape") {
            this.closeNav()
        }
    }

    render() {
        const { showNav } = this.state
        let navCoverStyle = { width: showNav ? "100%" : "0" }
        let sideNavStyle = { width: showNav ? "250px" : "0" }

        return (

            <section id="resume">
                <Navigation resumeData={resumeData}/>
            <React.Fragment>
        <span onClick={this.openNavClick} class="open-nav">
          &#9776; open
        </span>
                <div
                    onClick={this.navCoverClick}
                    class="nav-cover"
                    style={navCoverStyle}
                />
                <div name="side-nav" class="side-nav" style={sideNavStyle}>
                    <a href="#" onClick={this.closeNavClick} class="close-nav">
                        &times;
                    </a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
            </React.Fragment>
            </section>
        )
    }
}

export default Testing
