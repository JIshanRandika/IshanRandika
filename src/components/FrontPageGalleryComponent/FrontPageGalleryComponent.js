import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery.js';


class Demo1 extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: this.props.images
        };

        this.onSelectImage = this.onSelectImage.bind(this);

    }

    onSelectImage (index, image) {
        var images = this.state.images.slice();
        var img = images[index];
        if(img.hasOwnProperty("isSelected"))
            img.isSelected = !img.isSelected;
        else
            img.isSelected = true;

        this.setState({
            images: images
        });
    }

    render () {
        return (
            <div style={{
                display: "block",
                minHeight: "1px",
                width: "100%",
                border: "1px solid #ddd",
                overflow: "auto",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <Gallery
                    images={this.state.images}
                    onSelectImage={this.onSelectImage}
                    lightboxWidth={1536}
                />
            </div>
        );
    }
}

Demo1.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired,
            isSelected: PropTypes.bool
        })
    ).isRequired
};
function shuffleArray (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
Demo1.defaultProps = {
    images: shuffleArray([
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G1.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G1.jpg?raw=true",
        //     thumbnailWidth: 300,
        //     thumbnailHeight: 320,
        //     caption: "G1"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G2.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G2.jpg?raw=true",
        //     thumbnailWidth: 280,
        //     thumbnailHeight: 320,
        //     caption: "G2"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G3.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G3.jpg?raw=true",
        //     thumbnailWidth: 240,
        //     thumbnailHeight: 320,
        //     caption: "G3"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G4.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G4.jpg?raw=true",
        //     thumbnailWidth: 280,
        //     thumbnailHeight: 320,
        //     // isSelected: true,
        //     caption: "G4"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G5.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G5.jpg?raw=true",
        //     thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G5"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G6.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G6.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     // isSelected: true,
        //     caption: "G6"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G7.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G7.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G7"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G8.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G8.jpg?raw=true",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 213,
        //     // isSelected: true,
        //     caption: "G8"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G9.png?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G9.png?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G9"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G10.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G10.jpg?raw=true",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 213,
        //     // isSelected: true,
        //     caption: "G10"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G11.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G11.jpg?raw=true",
        //     thumbnailWidth: 308,
        //     thumbnailHeight: 320,
        //     caption: "G11"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G12.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G12.jpg?raw=true",
        //     thumbnailWidth: 120,
        //     thumbnailHeight: 113,
        //     // isSelected: true,
        //     caption: "G12"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G13.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G13.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G13"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G14.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G14.jpg?raw=true",
        //     thumbnailWidth: 320,
        //     thumbnailHeight: 213,
        //     // isSelected: true,
        //     caption: "G14"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G15.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G15.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G15"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G16.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G16.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G16"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G17.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G17.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G17"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G18.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G18.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G18"
        // },
        // // {
        // //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G19.jpg?raw=true",
        // //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G19.jpg?raw=true",
        // //     thumbnailWidth: 313,
        // //     thumbnailHeight: 320,
        // //     caption: "G19"
        // // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G20.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G20.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G20"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G21.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G21.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G21"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G22.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G22.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G22"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G23.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G23.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G23"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G24.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G24.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G24"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G25.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G25.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G25"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G26.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G26.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G26"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G27.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G27.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G27"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G28.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G28.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G28"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G29.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G29.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G29"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G30.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/MyProfileV4/blob/main/public/images/Gallery/G30.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G30"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G31.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G31.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G31"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G32.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G32.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G32"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G33.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G33.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G33"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G34.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G34.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G34"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G35.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G35.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G35"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G36.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G36.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G36"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G37.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G37.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G37"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G38.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G38.jpg?raw=true",
        //     thumbnailWidth: 313,
        //     thumbnailHeight: 320,
        //     caption: "G38"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G39.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G39.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G39"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G40.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G40.jpg?raw=true",
        //     thumbnailWidth: 213,
        //     thumbnailHeight: 320,
        //     caption: "G40"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G41.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G41.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G41"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G42.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G42.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G42"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G43.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G43.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G43"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G44.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G44.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G44"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G45.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G45.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G45"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G47.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G47.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     isSelected: true,
        //     caption: "G47"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G48.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G48.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G48"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G49.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G49.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G49"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G50.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G50.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G50"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G51.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G51.jpg?raw=true",
        //     thumbnailWidth: 400,
        //     thumbnailHeight: 320,
        //     caption: "G51"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G52.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G52.jpg?raw=true",
        //     thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G52"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G53.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G53.jpg?raw=true",
        //     thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G53"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G54.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G54.jpg?raw=true",
        //     thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G54"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G55.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G55.jpg?raw=true",
        //     thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G55"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G56.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G56.jpg?raw=true",
        //     thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G56"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G57.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G57.jpg?raw=true",
        //     thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G57"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G58.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G58.jpg?raw=true",
        //     thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G58"
        // },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G59.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G59.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G59"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G60.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G60.jpg?raw=true",
            // thumbnailWidth: 250,
            thumbnailHeight: 320,
            caption: "G60"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G61.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G61.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G61"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G62.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G62.jpg?raw=true",
            // thumbnailWidth: 450,
            thumbnailHeight: 320,
            caption: "G62"
        },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G63.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G63.jpg?raw=true",
        //     thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G63"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G64.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G64.jpg?raw=true",
        //     thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G64"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G65.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G65.jpg?raw=true",
        //     thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G65"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G66.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G66.jpg?raw=true",
        //     thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G66"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G67.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G67.jpg?raw=true",
        //     // thumbnailWidth: 450,
        //     thumbnailHeight: 320,
        //     caption: "G67"
        // },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G68.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G68.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 350,
            caption: "G68"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G69.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G69.jpg?raw=true",
            // thumbnailWidth: 380,
            thumbnailHeight: 320,
            caption: "G69"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G70.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G70.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 350,
            caption: "G70"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G71.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G71.jpg?raw=true",
            // thumbnailWidth: 450,
            thumbnailHeight: 320,
            caption: "G71"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G72.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G72.jpg?raw=true",
            // thumbnailWidth: 250,
            thumbnailHeight: 320,
            caption: "G72"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G73.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G73.jpg?raw=true",
            // thumbnailWidth: 450,
            thumbnailHeight: 320,
            caption: "G73"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G74.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G74.jpg?raw=true",
            // thumbnailWidth: 380,
            thumbnailHeight: 320,
            caption: "G74"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G75.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G75.jpg?raw=true",
            // thumbnailWidth: 450,
            thumbnailHeight: 320,
            caption: "G75"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G76.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G76.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G76"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G77.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G77.jpg?raw=true",
            // thumbnailWidth: 450,
            thumbnailHeight: 320,
            caption: "G77"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G78.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G78.jpg?raw=true",
            // thumbnailWidth: 450,
            thumbnailHeight: 320,
            caption: "G78"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G79.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G79.jpg?raw=true",
            // thumbnailWidth: 450,
            thumbnailHeight: 320,
            caption: "G79"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G80.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G80.jpg?raw=true",
            // thumbnailWidth: 450,
            thumbnailHeight: 320,
            caption: "G80"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G81.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G81.jpg?raw=true",
            // thumbnailWidth: 400,
            thumbnailHeight: 320,
            caption: "G81"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G82.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G82.jpg?raw=true",
            // thumbnailWidth: 450,
            thumbnailHeight: 320,
            caption: "G82"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G83.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G83.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 350,
            caption: "G83"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G84.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G84.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 350,
            caption: "G84"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G85.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G85.jpg?raw=true",
            // thumbnailWidth: 450,
            thumbnailHeight: 320,
            caption: "G85"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G86.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G86.jpg?raw=true",
            // thumbnailWidth: 1024,
            thumbnailHeight: 768,
            caption: "G86"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G87.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G87.jpg?raw=true",
            // thumbnailWidth: 400,
            thumbnailHeight: 320,
            caption: "G87"
        },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G89.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G89.jpg?raw=true",
        //     // thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G89"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G90.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G90.jpg?raw=true",
        //     // thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G90"
        // },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G91.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G91.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G91"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G92.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G92.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G92"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G93.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G93.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G93"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G94.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G94.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G94"
        },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G95.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G95.jpg?raw=true",
        //     // thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G95"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G96.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G96.jpg?raw=true",
        //     // thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G96"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G97.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G97.jpg?raw=true",
        //     // thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G97"
        // },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G98.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G98.jpg?raw=true",
        //     // thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G98"
        // },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G99.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G99.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G99"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G100.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G100.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G100"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G101.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G101.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G101"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G102.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G102.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G102"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G103.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G103.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G103"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G104.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G104.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G104"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G105.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G105.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G105"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G106.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G106.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G106"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G107.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G107.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G107"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G108.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G108.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G108"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G109.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G109.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G109"
        },
        // {
        //     src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G110.jpg?raw=true",
        //     thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G110.jpg?raw=true",
        //     // thumbnailWidth: 350,
        //     thumbnailHeight: 320,
        //     caption: "G110"
        // },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G111.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G111.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G111"
        },

        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G112.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G112.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G112"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G113.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G113.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G113"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G114.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G114.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G114"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G115.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G115.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G115"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G116.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G116.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G116"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G117.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G117.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G117"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G118.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G118.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G118"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G119.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G119.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G119"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G120.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G120.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G120"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G121.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G121.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G121"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G122.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G122.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G122"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G123.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G123.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G123"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G124.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G124.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G124"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G125.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G125.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G125"
        },
        {
            src: "https://github.com/JIshanRandika/images/blob/main/Gallery/G126.jpg?raw=true",
            thumbnail: "https://github.com/JIshanRandika/images/blob/main/Gallery/G126.jpg?raw=true",
            // thumbnailWidth: 350,
            thumbnailHeight: 320,
            caption: "G126"
        },
    ])
};

export default Demo1;

// ReactDOM.render(<Demo0 />, document.getElementById('demo0'));
