import React, { Component } from "react";
import { Col, Row, Modal, ModalBody } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export default class AwardCardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            selectedImage: null,
            hoveredIndex: null, // Track which card is hovered
        };
    }

    componentDidMount() {
        AOS.init({ duration: 2000 });
    }

    toggleModal = (image = null) => {
        this.setState((prevState) => ({
            isModalOpen: !prevState.isModalOpen,
            selectedImage: image,
        }));
    };

    handleMouseEnter = (index) => {
        this.setState({ hoveredIndex: index });
    };

    handleMouseLeave = () => {
        this.setState({ hoveredIndex: null });
    };

    render() {
        const { resumeData } = this.props;
        const { isModalOpen, selectedImage, hoveredIndex } = this.state;

        return (
            <section id="portfolio" style={{ background: "#f9f9f9", padding: "40px 0" }}>
                <h1
                    style={{
                        fontSize: "28px",
                        color: "#5A5A5A",
                        textAlign: "center",
                        marginBottom: "20px",
                        marginTop: "40px",
                    }}
                >
                    Honors and Awards
                </h1>

                <Row className="justify-content-center" style={{ margin: "0 auto", maxWidth: "1200px" }}>
                    {resumeData.awardsCards &&
                    resumeData.awardsCards.map((item, index) => (
                        <Col
                            key={index}
                            data-aos="fade-up"
                            data-aos-offset="100"
                            md="3"
                            xs="12"
                            style={{
                                margin: "15px",
                                background: "#ffffff",
                                borderRadius: "8px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                overflow: "hidden",
                                cursor: "pointer",
                                transform: hoveredIndex === index ? "scale(0.95)" : "scale(1)", // Apply zoom-out effect
                                transition: "transform 0.3s ease", // Smooth transition
                                border: "2px solid gold", // Add gold border
                            }}
                            onMouseEnter={() => this.handleMouseEnter(index)}
                            onMouseLeave={this.handleMouseLeave}
                            onClick={() => this.toggleModal(item.imgurl)}
                        >
                            <div style={{ textAlign: "center" }}>
                                <img
                                    src={item.imgurl}
                                    alt={item.title}
                                    style={{
                                        marginTop: "20px",
                                        width: "180px",
                                        height: "180px",
                                        objectFit: "cover",
                                        backgroundColor: "#eaeaea",
                                    }}
                                />

                                <div style={{ padding: "20px" }}>
                                    <h5 style={{ fontSize: "18px", color: "#333", marginBottom: "10px" }}>
                                        {item.title}
                                    </h5>
                                    <p style={{ fontSize: "14px", color: "#777" }}>{item.subtitle}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Modal for Zoomed Image */}
                <Modal isOpen={isModalOpen} toggle={() => this.toggleModal()}>
                    <ModalBody
                        style={{
                            textAlign: "center",
                            padding: "20px",
                            border: "2px solid gold", // Add gold border for the modal
                            borderWidth:"10px",
                            borderRadius: "8px", // Optional: Round corners of the modal
                        }}
                    >
                        <img
                            src={selectedImage}
                            alt="Zoomed Certification"
                            style={{ width: "100%", maxHeight: "80vh", objectFit: "contain" }}
                        />
                    </ModalBody>
                </Modal>
            </section>
        );
    }
}
