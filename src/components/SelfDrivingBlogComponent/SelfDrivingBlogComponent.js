import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Col, Row} from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class SelfDrivingBlogComponent extends Component {
    render() {
        AOS.init({
            duration: 2000,
        })
        let resumeData = this.props.resumeData;
        return (
            <section id="resume">
                <div style={{width:"100%", textAlign:"center", marginBottom:"60px"}}>
                    <h1 style={{fontSize:"25px",color:"#95A3A3"}}>Self-Driving</h1>
                </div>
                <div className="row education">

                    <div className="ten columns main-col">

                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3><a>Introduciton</a></h3>

                                            <p style={{textAlign:"justify"}}>
                                                Nowadays  self-driving  vehicle  is  an  eminent  innovation  in  the  present  technical  world.  Norman  Bel  Geddes  found  the  first  self-driving  car  in  1939.  (Ginger,  n.d.).  Now  we  can  see  a  good  market  for  these  self-driving  vehicles.  So,  these  self-driving  vehicles  give  a  really  easy  experience  for  users.  This  innovation  moderates  the  traditional  vehicle  industry.  Therefor  this  vehicle  does  not  want  a  controller  as  a  driver.  These  vehicles  fully  controlled  by  a  computer  system.  We  can  give  a  command  simply  through  a  single  touch  for  this  computer  system.  Nevertheless,  this  innovation  mostly  supports  some  of  the  other  industries  develop  with  these  vehicles.  Such  as  public  transports  and  delivery  services.  So,  this  is  a  great  innovation.  This  literature  review  able  to  like  “As  an  envisaged  future  of  transportation,  self-driving  cars  are  being  discussed  from  various  perspectives,  including  social,  economic,  engineering,  computiller  science,  design,  and  ethics.”  (Holstein,  Crnkovic,  &  Pelliccione,  January  2018).  This  essay  will  discuss  about  self-driving  vehicles  through  three  subtitles.  These  three  how  to  use  new  technologies  for  these  vehicles,  advantages  and  disadvantages  from  self-driving  vehicles  for  human  beings  and  how  support  to  world  road  systems  with  the  social  problems  and  social  attitudes  about  the  self-driving  vehicles  which  mean  what  is  the  peoples’  idea  about  this  innovation.
                                            </p>
                                            <img style={{padding:"25px"}} src="https://github.com/JIshanRandika/images/blob/main/SelfDrivingBlog/img1.jpg?raw=true"/>

                                        </div>
                                    </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3><a>Security Problems</a></h3>

                                <p style={{textAlign:"justify"}}>
                                    These  self-driving  vehicles  innovate  with  new  technologies  for  security  problems.  Some  technology  in  this  vehicle  also  uses  to  other  devices  like  some  hardware  and  software  components.  So,  another  technical  field  also  improved  with  these  technologies.  according  to  this,  we  can  say  this  technology  is  a  main  turning  point  in  the  technical  world.  According  to  Title  Max  website  Norman  Bel  Geddes  innovate  first  self-driving  car  as  electric  vehicle  with  the  radio-controlled  electromagnetic  fields.  (Gringer,  n.d.).  Normally  traditional  vehicle  used  radio  waves  only  for  the  radio  system.  Nevertheless,  self-driving  vehicles  using  these  radio  waves  for  controlling  the  vehicle.  These  radio  waves  always  connected  with  the  satellites  in  the  air.  As  stated  in  Toptal  website  these  vehicles  convey  on  their  potential,  self-governing  autos  depend  on  an  extensive  sensor  suite  intended  to  ensure  ecological/situational  mindfulness.  Obviously,  the  minds  behind  the  activity  are  computers.  (Causevic,  n.d.).  Therefore,  these  self-driving  vehicles  fully  controlled  by  a  computer  system.  International  Journal  of  Intelligent  Unmanned  Systems  illustrates  “The  automatic  control,  architecture,  artificial  intelligence,  computer  vision  and  many  other  technologies  are  integrated  into  the  self-driving  car,  which  is  a  product  of  the  highly  developed  computer  science,  pattern  recognition  and  intelligent  control  technology.”  (Zhao,  Liang,  &  Chen,  2018).  This  shows  about  many  technologies  use  by  automated  vehicles.  Especially  this  vehicle  should  use  a  great  architecture  design  by  engineers.  Sometimes  outside  architecture  is  the  same  as  normal  vehicle.  But  inside  architecture  is  different  than  traditional  vehicles.  Therefore,  this  vehicle  has  many  facilities  than  other  vehicles.  As  well  as  artificial  intelligence  is  the  main  technology  used  by  automated  vehicles.  Therefore,  one  can  say  these  self-driving  vehicles  use  many  technologies  for  solving  the  security  issues  in  them.                                </p>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3><a>Advantages and Disadvantages</a></h3>

                                <p style={{textAlign:"justify"}}>
                                    Self-driving  vehicles  have  both  advantages  and  disadvantages  for  security  problems.  This  vehicle  has  a  great  life  security  system  with  using  new  technology.  But  all  features  in  this  vehicle  based  on  a  computer  system,  so  we  cannot  believe  a  computer  system  like  the  human  brain.  As  well  as  this  innovation  gives  many  advantages  to  society  like  easy  travelling.  On  the  other  hand,  these  vehicles  have  many  security  issues.  According  to  Axel  Addict  website  Over  80%  of  vehicle  crashes  in  the  US  are  brought  about  by  driver  mistake.  There  would  be  less  client  blunders  and  less  botches  on  the  streets  if  all  vehicles  ended  up  driverless.  (Goodman,  2019).  So,  we  can  say  self-driving  vehicle  gives  appreciable  features  for  users.  It  gives  highly  life  security  for  passengers.  Through  these  features,  we  can  easily  manage  the  traffic  jams.  Because  speed  limits  also  control  by  these  automated  vehicles.  Rosenzweig  and  Bartl  (2015),  state  that  Autonomous  Driving  has  been  said  to  be  the  following  enormous  problematic  development  in  the  years  to  come.  Considered  as  being  prevalently  innovation  driven,  it  should  have  huge  cultural  effect  in  a  wide  range  of  fields.  Therefore,  this  innovation  is  affected  to  people  through  many  ways  in  bad  and  good.  Michigan  Telecommunications  and  Technology  Law  Review  say,  “These  threats  could  range  from  sophisticated  hackers  attempting  to  gain  control  over  an  entire  network  of  AVs,  or  a  lone  criminal  taking  advantage  of  the  predictability  of  the  new  systems.”  (Kennedy,  2017).  This  is  a  dangerous  advantage  in  this  innovation.  Brutal  people  can  rob  the  data  and  kill  a  person  with  hacking  a  computer  system  in  the  self-driving  vehicle.  Finally,  we  can  say  self-driving  vehicles  give  substantial  advantages  and  some  substantial  disadvantages  for  security  problems.                                </p>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3><a>Human Attitude</a></h3>

                                <p style={{textAlign:"justify"}}>
                                    People  have  different  attitudes  about  security  in  self-driving  vehicles.  Most  people  in  the  world  get  any  benefits  from  self-driving  vehicles.  Nevertheless,  some  people  happen  face  to  detrimental.  Therefor  this  innovation  directly  affected  to  drivers’  job.  So,  they  happen  to  find  another  job.  If  they  could  not  find  another  job,  they  tempted  to  wrong  jobs  like  underworld  criminal  works.  According  to  Urban,  Planning  and  Transport  Research  Given  the  measure  of  consideration,  nowadays  many  communication  systems  are  using  to  broadcast  about  the  self-driving  vehicles.  (Pettigrew,  Worrall,  Talati,  Fritschi,  &  Norman,  2019).  They  use  more  advertisement  to  observe  the  nature  and  approach  of  autonomous  vehicles  innovation.  Therefor  people  misunderstand  about  the  security  system  in  this  innovation.  So  self-driving  vehicle  manufacture  companies  always  market  their  productions.  As  well  as  some  people  do  not  like  to  change  the  traditional  vehicle  systems.  Therefore,  sometimes    happen  to  change  some  rules  and  regulation  for  driverless  vehicles.  ARRB  International  Conference  says  terms  of  mindfulness,  most  of  the  respondents  revealed  not  having  had  direct  experience  utilizing  autonomous  vehicles  advances  or  capacities,  even  though  most  of  the  example  announced  being  either  early  adopters  or  in  all  respect’s  early  adopters  of  innovation.  (Cunningham,  Ledger,  &  Regan,  2018).  It  shows  normal  people  have  not  a  better  idea  about  self-driving  vehicles.  According  to  Science  Direct  “25%  of  the  respondents  answered  that  automated  vehicles  would  be  safer  than  human  driven  vehicles,  46%  answered  that  automated  vehicles  would  be  as  safe  as  human  driven  vehicles”  (Piao,  Donald,  Hounsell,  Graindorge,  Graindorge,  &  Malhene,  2016).  Any  people  have  divergent  thinking  patterns,  according  to  their  life  situation.  People  like  to  new  innovation,  but  they  want  it  high  security.  So,  they  give  different  ideas.  Now  we  can  really  understand  peoples’  attitudes  about  the  self-driving  vehicles.
                                </p>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3><a>Conclusion</a></h3>

                                <p style={{textAlign:"justify"}}>
                                    In  conclusion,  this  literature  review  illustrates  how  to  use  new  technologies  for  security  problems  in  self-driving  vehicles.  Furthermore,  this  shows  how  to  perceive  what  is  the  social  attitude  about  autonomous  vehicles,  according  to  their  advantages  and  disadvantages.  This  innovation  has  many  advantages  more  than  disadvantages  for  future  technical  evolution.  Unfortunately,  according  to  the  above,  people  have  not  a  better  idea  about  self-driving  vehicles.  Therefore,  infrastructure  for  this  vehicle  which  is  limited  to  a  few  countries  and  cities.  So,  people  do  not  interact  with  this  innovation.  The  only  manufactural  company  cannot  expand  this  innovation  in  the  world  without  support  from  governments  in  all  countries.  As  well  as  some  rules  and  regulation  should  change  or  enforce  to  control  these  vehicles.  If  we  use  autonomous  vehicles  properly,  we  should  automate  some  security  systems  on  the  roads.  Therefore  traditional  police  system  cannot  control  these  vehicles  without  a  driver.  Road  in  rural  areas  which  should  develop  with  the  new  technology  for  these  vehicles.  If  mankind  practice  using  these  vehicles  who  can  get  more  benefits  in  our  future.  This  is  a  highly  applicable  innovation  for  future  busy  life  in  the  technical  world.  Future  generation  will  be  able  to  solve  all  security  problems  with  the  new  technology  in  the  self-driving  vehicles.                                  </p>
                                <img style={{padding:"25px"}} src="https://github.com/JIshanRandika/images/blob/main/SelfDrivingBlog/img2.jpg?raw=true"/>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3><a>References</a></h3>

                                <p style={{textAlign:"justify"}}>
                                    Causevic,  C.  (n.d.).  How  Machine  Learning  Can  Enhance  Cybersecurity  for  Autonomous  Cars.  (August  17,  2019).  Retrieved  from  https://www.toptal.com/insights/innovation/how-machine-learning-can-enhance-cybersecurity-for-autonomous-cars
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


            </section>
        );
    }
}