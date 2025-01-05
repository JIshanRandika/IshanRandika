import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class BlogCardComponent extends Component {
    render() {
        AOS.init({
            duration: 1500,
            once: true,
        });

        let resumeData = this.props.resumeData;
        return (
            <section id="portfolio" style={{ background: "#f9f9f9", padding: "50px 20px" }}>
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <h1 style={{ fontSize: "32px", color: "#333", fontWeight: "bold" }}>My Blogs</h1>
                    <p style={{ fontSize: "16px", color: "#666" }}>
                        Explore my latest thoughts and writings.
                    </p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                    {resumeData.blogCards &&
                    resumeData.blogCards.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                background: "white",
                                borderRadius: "15px",
                                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                                overflow: "hidden",
                                maxWidth: "600px",
                                transition: "transform 0.3s ease-in-out",
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                        >
                            <img
                                src={item.imgurl}
                                alt={item.title}
                                style={{
                                    width: "200px",
                                    height: "auto",
                                    objectFit: "cover",
                                }}
                            />
                            <div style={{ padding: "20px", flex: 1 }}>
                                <h5 style={{ fontSize: "18px", margin: "0 0 10px", color: "#333" }}>
                                    {item.title}
                                </h5>
                                <p style={{ fontSize: "14px", color: "#777", margin: "0 0 20px" }}>
                                    {item.subtitle}
                                </p>
                                <a
                                    href={item.router}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: "none" }}
                                >
                                    <button
                                        style={{
                                            backgroundColor: "#11ABB0",
                                            color: "white",
                                            border: "none",
                                            padding: "10px 20px",
                                            borderRadius: "30px",
                                            cursor: "pointer",
                                            fontSize: "14px",
                                            transition: "background-color 0.3s ease",
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#18787b"}
                                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#11ABB0"}
                                    >
                                        Read More
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}
