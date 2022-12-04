import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Col, Row} from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class WirlessCommunicationBlogComponent extends Component {
    render() {
        AOS.init({
            duration: 2000,
        })
        let resumeData = this.props.resumeData;
        return (
            <section id="resume">
                <div style={{width:"100%", textAlign:"center", marginBottom:"60px"}}>
                    <h1 style={{fontSize:"25px",color:"#95A3A3"}}>Wireless Communication</h1>
                </div>
                <div className="row education">

                    <div className="ten columns main-col">

                        <div className="row item">
                            <div className="twelve columns">
                                <h3><a>Introduction to Wireless Communication</a></h3>

                                <p style={{textAlign:"justify"}}>
                                    In our regular day to day existences, remote correspondence framework has become a fundamental piece of different sorts of remote specialized gadgets that licenses customer to pass on even from remote worked regions. Various types of devices are for remote correspondence, for instance, mobiles. The remote telephones, nowadays, incorporate 3 and 4G systems, Bluetooth and Wi-Fi innovations.
                                </p>
                                <img style={{padding:"25px"}} src="https://github.com/JIshanRandika/images/blob/main/WirelessCommunicationBlog/img1.jpg?raw=true"/>

                            </div>
                        </div>

                        <div className="row item">
                            <div className="twelve columns">
                                <h3><a>WLAN (Wireless Local Area Network)</a></h3>

                                <p style={{textAlign:"justify"}}>
                                    A wireless local area network (WLAN) is a wireless distribution method for two or more devices that utilization high-frequency radio waves and frequently incorporate an access point to the Internet. A WLAN permits users to move around the inclusion region, frequently a home or small office, while keeping up a network connection.In some case wireless LAN technology is utilized to save costs and abstain from laying cable, while in other instances, it is the only choice for giving fast internet access to people in general. Whatever the explanation, wireless solutions are springing up all over. The advantages of local area networks are high range and coverage, integrity, Interoperability with wired and wireless infrastructure, Interference, Simplicity, Ease, Security, Cost, Scalability and safety which makes an extraordinary platform for the wireless network.
                                </p>
                                <img style={{padding:"25px"}} src="https://github.com/JIshanRandika/images/blob/main/WirelessCommunicationBlog/img2.jpg?raw=true"/>

                            </div>
                        </div>

                        <div className="row item">
                            <div className="twelve columns">
                                <h3><a>WWAN (Wireless Wide Area Network)</a></h3>

                                <p style={{textAlign:"justify"}}>
                                    A wireless wide area network (WWAN) is a specific type of network that imparts wireless signals past a solitary building or property. WWANs can be kept up over bigger regions like cities or countries through multiple satellite networks or antenna sites took care of by an ISP. 2G (2nd Generation) systems are what these sorts of systems are called.
                                </p>
                                <img style={{padding:"25px"}} src="https://github.com/JIshanRandika/images/blob/main/WirelessCommunicationBlog/img3.jpg?raw=true"/>

                            </div>
                        </div>

                        <div className="row item">
                            <div className="twelve columns">
                                <h3><a>WMAN (Wireless Metropolitan Area Network)</a></h3>

                                <p style={{textAlign:"justify"}}>
                                    Quick correspondence of network within the metropolitan territory is called Metropolitan area network. This can reach out up to the whole city or other related geographic territory and can length up to 50 km. WMAN enables the users to make wireless connections between different areas inside a metropolitan zone. It links the numerous office buildings in a city or on a college. WMAN does not require significant expense of setting fiber or copper cabling and leasing lines. In addition to that, WMAN can work as backups for wired networks. (techopedia,n.d)
                                    The IEEE 802.16 wireless metropolitan area network (WMAN) standards family has been created by the IEEE 802.16 Working Group to address the market interest for broadband wireless access (BWA). This section examines key technological features of the Fixed WiMAX joined by brief explanations of media access control (MAC) and its different service viewpoints, trailed by a short outline of OFDM physical layer (PHY). The development of BWA as it relates to WiMAX technology can be followed back to the craving to locate an attainable option to traditional wired broadband infrastructures.
                                </p>
                                <img style={{padding:"25px"}} src="https://github.com/JIshanRandika/images/blob/main/WirelessCommunicationBlog/img4.jpg?raw=true"/>

                            </div>
                        </div>


                        <div className="row item">
                            <div className="twelve columns">
                                <h3><a>WPAN (Wireless Personal Area Network)</a></h3>

                                <p style={{textAlign:"justify"}}>
                                    A WPAN (wireless personal area network) is a personal area network - a network for interconnecting devices centered around an individual person's workspace - in which the connections are wireless. Commonly, a wireless personal area network utilizes some technology that grants correspondence inside around 10 meters - in other words, a very short span. One such technology is Bluetooth, which was used as the root for a new standard, IEEE 802.15. Wireless Personal Area Networks are short-span networks that are used to interconnect the devices based on Bluetooth technology in a focal area like a work area.
                                </p>
                                <img style={{padding:"25px"}} src="https://github.com/JIshanRandika/images/blob/main/WirelessCommunicationBlog/img5.jpg?raw=true"/>

                            </div>
                        </div>


                        <div className="row item">
                            <div className="twelve columns">
                                <h3><a>Hybrid Network</a></h3>

                                <p style={{textAlign:"justify"}}>
                                    A Hybrid Network is as simple as having two (or more) diverse network connections to a site, however there is much more to it than that.

                                    Maybe the most well-known hybrid network definition we see is a primary MPLS and a secondary internet connection.  You'll frequently observe this in writing portraying SD WAN, with the advantage being diminished expenses.  The internet connection is some of the time set forward as multiple consumer grade broadband connections by SD WAN CPE vendors hoping to help their cost-sparing contention.
                                </p>
                                <img style={{padding:"25px"}} src="https://github.com/JIshanRandika/images/blob/main/WirelessCommunicationBlog/img6.png?raw=true"/>

                            </div>
                        </div>


                        <div className="row item">
                            <div className="twelve columns">
                                <h3><a>Bluetooth Transmission</a></h3>

                                <p style={{textAlign:"justify"}}>
                                    The fundamental (gross) radio channel data transmission rate for a solitary Bluetooth radio channel is 1 Mbps with over 723.2 kbps available to a solitary user. Later forms of the Bluetooth system have been upgraded to accommodate for higher speed data transmission services using more advanced modulation technologies. This builds the gross data transmission rate to 2 Mbps or 3 Mbps reliant on which modulation technology is used.
                                </p>
                                <img style={{padding:"25px"}} src="https://github.com/JIshanRandika/images/blob/main/WirelessCommunicationBlog/img7.jpg?raw=true"/>

                            </div>
                        </div>


                        <div className="row item">
                            <div className="twelve columns">
                                <h3><a>Radio Transmission</a></h3>

                                <p style={{textAlign:"justify"}}>
                                    In the electromagnetic spectrum, every single omnidirectional waves in the frequencies 3KHz to 1GHz are called radio waves. They are broadly utilized for communications because they are easy to generate, can move long distances and can infiltrate buildings. Radio waves have omnidirectional antennas, for example antennas that can transmit signal every which way. (SCHROEDER, 2011)
                                    The properties of radios waves fluctuate as per their frequencies. However, radio waves at all frequencies are inclined to obstruction from electrical apparatus like motors etc.
                                </p>
                                <img style={{padding:"25px"}} src="https://raw.githubusercontent.com/JIshanRandika/images/670e6f7ea42c3b994c0b86a2c885b6d8db29da08/WirelessCommunicationBlog/img8.svg"/>

                            </div>
                        </div>

                        <div className="row item">
                            <div className="twelve columns">
                                <h3><a>Infrared Transmission</a></h3>

                                <p style={{textAlign:"justify"}}>
                                    Within this wireless technology, conveys data in a device or systems through IR radiation.  This form of radiation is electromagnetic energy at a wavelength that is lengthier than red light. The usage is for security control, TV remote control and short-span interchanges. IR radiation lies among microwaves and visible light in the electromagnetic spectrum with the goal that they can be utilized as a wellspring of communication. LED transmitter and a photo diode receptor are required for a fruitful infrared communication. The between the source and the destination. is moved when the LED transmitter transmit IR signals as non-unmistakable light that is caught and saved the photoreceptor. Mobile phones, laptops, security systems, TVs and etc. assist wireless communication technologies with the source and target.
                                </p>
                                <img style={{padding:"25px"}} src="https://github.com/JIshanRandika/images/blob/main/WirelessCommunicationBlog/img9.jpg?raw=true"/>

                            </div>
                        </div>


                    </div>
                </div>


            </section>
        );
    }
}