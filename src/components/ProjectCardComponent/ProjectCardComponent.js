import React, { Component } from 'react';
import { Col, Row } from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class ProjectCardComponent extends Component {
    render() {
        AOS.init({
            duration: 1500,
            easing: "ease-in-out",
            once: true,
        });

        const { resumeData } = this.props;

        return (
            <section id="portfolio" style={{ background: "#f9f9f9", padding: "40px 20px" }}>
                <h1 style={{ fontSize: "28px", color: "#2C3E50", textAlign: "center", marginBottom: "30px", marginTop: "20px" }}>Projects</h1>
                <Row style={{ justifyContent: "center", gap: "20px" }}>

                    {resumeData.projectsCards && resumeData.projectsCards.map((item, index) => (
                        <Col
                            key={index}
                            data-aos="fade-up"
                            md="3"
                            xs="12"
                            style={{
                                background: "#ffffff",
                                borderRadius: "8px",
                                overflow: "hidden",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                marginBottom: "20px",
                                transition: "transform 0.3s ease",
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                        >
                            <div>
                                <div
                                    style={{
                                        position: "relative",
                                        width: "100%",
                                        paddingTop: "100%", // Maintains a square aspect ratio
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src={item.imgurl}
                                        alt={item.title}
                                        style={{
                                            position: "absolute",
                                            top: "0",
                                            left: "0",
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>
                                <div style={{ padding: "20px", textAlign: "center" }}>
                                    <h5 style={{ fontSize: "18px", color: "#34495E", marginBottom: "10px" }}>{item.title}</h5>
                                    <p style={{ fontSize: "14px", color: "#7F8C8D", marginBottom: "20px" }}>{item.subtitle}</p>
                                    <a
                                        href={item.router}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            textDecoration: "none",
                                            width: "100%",
                                        }}
                                    >
                                        <button
                                            disabled={item.router === "#"}
                                            className="shadow"
                                            style={{
                                                width: "100%",
                                                padding: "10px 15px",
                                                backgroundColor: item.router === "#" ? "gray" : "#11ABB0",
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: "4px",
                                                cursor: item.router === "#" ? "not-allowed" : "pointer",
                                                transition: "background-color 0.3s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                if (item.router !== "#") e.target.style.backgroundColor = "#18787b";
                                            }}
                                            onMouseLeave={(e) => {
                                                if (item.router !== "#") e.target.style.backgroundColor = "#11ABB0";
                                            }}
                                        >
                                            {item.router === "#" ? "View" : "View"}
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    ))}

                </Row>
            </section>
        );
    }
}
