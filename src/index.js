import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './views/Home/Home';
import Test from './views/Home/Test';
import BlogCardsView from './views/BlogCardsView/BlogCardsView';
import ResumeView from './views/ResumeView/ResumeView';
import TestimonialView from './views/TestimonialView/TestimonialView';
import SelfDrivingBlogView from './views/SelfDrivingBlogView/SelfDrivingBlogView';
import WIrelessCommunication from './views/WIrelessCommunicationBlogView/WIrelessCommunicationBlogView';
import CertificationCardView from './views/CertificationCardView/CertificationCardView';
import ProjectCardsView from './views/ProjectCardsView/ProjectCardsView';
import AwardCardsView from './views/AwardCardsView/AwardCardsView';
import LifeCardsView from './views/LifeCardsView/LifeCardsView';
import ServicesCardsView from './views/ServicesCardsView/ServicesCardsView';
import AzureFundamentalCertificationView from './views/AzureFundamentalCertificationView/AzureFundamentalCertificationView';
import BettingProjectView from './views/BettingProjectView/BettingProjectView';
import ContactVoletProjectView from './views/ContactVoletProjectView/ContactVoletProjectView';
import App from './App';

import Learning from './Learning';
import Achievement from './achievements';
import Kvns from './components/learning/Kvns';
import Esoft from './components/learning/Esoft';
import Htcc from './components/learning/Htcc';
import Self from './components/learning/Self';
import MyLife from './myLife';
import Testing from './Testing';
import Project from './projects';
import Ijse from './components/learning/Ijse';
import Acbt from './components/learning/Acbt';
import Betting from './components/projects/Betting';
import "../node_modules/video-react/dist/video-react.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
//    "bootstrap": "^4.6.0",
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//     <React.StrictMode>
//             <Home  exact path="/"/>
//             <Test  exact path="/"/>
//     </React.StrictMode>,
//     document.getElementById('root')
//
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


const routing = (
    <Router>
        <Switch>
            <Route exact path={process.env.PUBLIC_URL +"/"} component={Home} />
            <Route  path="/Achievement" component={Achievement} />
            <Route  path="/Learn" component={Learning} />
            <Route  path="/MyLife" component={MyLife} />
            <Route  path="/Project" component={Project} />
            <Route  path="/kvns" component={Kvns} />
            <Route  path="/htcc" component={Htcc} />
            <Route  path="/esoft" component={Esoft} />
            <Route  path="/Betting" component={Betting} />
            <Route  path="/Testing" component={Testing} />
            <Route  path="/ijse" component={Ijse} />
            <Route  path="/acbt" component={Acbt} />
            <Route  path="/self" component={Self} />
            <Route  path="/blogCards" component={BlogCardsView} />
            <Route  path="/resume" component={ResumeView} />
            <Route  path="/testimonial" component={TestimonialView} />
            <Route  path="/selfdriving" component={SelfDrivingBlogView} />
            <Route  path="/wirelsscommunication" component={WIrelessCommunication} />
            <Route  path="/certificationCards" component={CertificationCardView} />
            <Route  path="/projectCards" component={ProjectCardsView} />
            <Route  path="/awardCards" component={AwardCardsView} />
            <Route  path="/lifeCards" component={LifeCardsView} />
            <Route  path="/servicesCards" component={ServicesCardsView} />
            <Route  path="/azureFundamental" component={AzureFundamentalCertificationView} />
            <Route  path="/bettingProject" component={BettingProjectView} />
            <Route  path="/contactVolet" component={ContactVoletProjectView} />
        </Switch>

    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

