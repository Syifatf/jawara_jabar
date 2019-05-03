import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pohon1 from '../assets/images/ccc.jpg';
import cabai from '../assets/images/cabaim.jpg';
import Merah from '../assets/images/merah.jpg';
import Hijau from '../assets/images/hijau.jpg';
import Kuning from '../assets/images/kuning.jpg';

class Carausel extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img
              // src={require('../assets/images/Blue.jpg')}
              src={Merah} alt="merah"
              // alt
              // return <img src={logo} alt="Logo" />;
            />
          </div>
         <div>
            <img
              src={Hijau} 
              // alt="tulip"
              alt="Credit to Alisa Anton on Unsplash"
            />
          </div>
          <div>
            <img
              src={Kuning}
              alt="Credit to Igor Ovsyannykov on Unsplash"
            />
          </div>

          <div>
            <img
              src={Pohon1}
              alt="Credit to Igor Ovsyannykov on Unsplash"
            />
          </div>
          <div>
            <img
              src={cabai}
              alt="Credit to Igor Ovsyannykov on Unsplash"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carausel;
