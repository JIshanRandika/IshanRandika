import React, { Component }  from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};
const Testimonial = () => {
    return (
        <div
            className="testimonial"
            style={{ display: "flex", justifyContent: "center", background:"white",paddingBlock:"18%" }}
        >
            <div style={{ width: "50%", textAlign: "center" }}>
                <h1 style={{ marginBottom: 50 }}>TESTIMONIALS</h1>
                <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                    <Card img="https://github.com/JIshanRandika/images/blob/main/Testimonial/Sandun.jpg?raw=true" des="I rarely come across real talents who stand out like Ishan. He is exceptionally smart, honest, hardworking, friendly, and very easy to work with. His attention to detail is impressive.
I met Ishan at Sentura Technologies Pvt(Ltd) while he was working as a Trainee Associate Software Engineer, in this company he worked under me.
He is keen in gaining new knowledge each day and applying it on practical scenarios. Ishan’s performances and innovations really got us amazed each day.
I admire Ishan very much for his amazing talent and good heart!
" name="Sandun Dilhara" position="Co-Founder at Sentura Technologies"/>
                    <Card img="https://github.com/JIshanRandika/images/blob/main/Testimonial/Madumini.jpg?raw=true" des="Ishan is a very enthusiastic., creative and innovative person who doesn’t consider any boundaries when he performs his job role. Ishan has well-grounded experience in user interface designing. He can create brilliant user interface with the modern UI UX concepts. His designs are really amazing. He always works towards to fulfill his job very well. Most importantly he will guarantee your job done on time. Also, he proved himself to be well respected and always gives attention to our requirements. I highly recommend this talented guy to anyone who he is looking to design their website."
                    position="B. B. Mgt. Acc(Sp)" name="Madumini Bagyanthi"/>
                    <Card img="https://github.com/JIshanRandika/images/blob/main/Testimonial/Jude.jpg?raw=true" des="Ishan is a self-motivative clever student. I met Ishan at the Australian College of Business and Technologies as my student in Applied Communications subject. He is such a bright and cheerful person, and I enjoyed having him in my class this year. He joined in the class activities with lots of enthusiasm and encouraged others to do the same. I am certain that your love of learning will take you far in life. Ishan got the highest marks for all assignments and quizzes. Finally, he successfully completed his Computer Science Diploma under the Edith Cowan University of Australia with the 82.125% highest average."
                          name="Jude Muran" position="Assistant Manager - Network Operations Virtusa"/>

                    {/*<Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" des="asdjhk"/>*/}
                </Slider>
            </div>
        </div>
    );
};

const Card = ({ img,des,name,position }) => {

    return (
        <div
            className="shadow"
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                color: "gray",
                background:"white",
                paddingTop:"50px",
                margin:"8px"

            }}
        >
            <Avatar
                imgProps={{ style: { borderRadius: "50%" } }}
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: "1px solid lightgray",
                    padding: 7,
                    marginBottom: 20,
                }}
            />
            <p style={{margin:"10%"}}>
                {des}
            </p>

            <p style={{ fontStyle: "italic", marginTop: 25 }}>
                <span style={{ fontWeight: 500, color: "green" }}>{name}</span> ,
                {position}
            </p>
        </div>
    );
};

export default Testimonial;
