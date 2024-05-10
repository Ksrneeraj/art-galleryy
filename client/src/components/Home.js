import React from 'react';
import Slider from 'react-slick';
import Header from './Header';
import Footer from './Footer';
import feature1 from './images/feature1.jpg';
import feature2 from './images/feature2.jpg';
import feature3 from './images/feature3.jpg';
import bg from './images/bg.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Contactus from './Contactus';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change speed to 3 seconds
    centerMode: true, // Center the slides
    centerPadding: '60px', // Adjust the padding for centering
  };

  const curvedImageStyle = {
    maxWidth: '80%',
    height: 'auto',
    margin: '0 auto',
    borderRadius: '20px', // Adjust the value to control the curve radius
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />

      <div className="Dashboard">
        <h2>START YOUR ART JOURNEY FROM US !</h2>
        <p>Join our online art gallery to showcase your talent to the world.</p>
        <Slider {...settings}>
          <div className="Feature">
            <img src={feature1} alt="Feature 1" style={curvedImageStyle} />
            <h3>Wide Selection</h3>
            <p>Discover a diverse collection of artworks from talented artists around the globe.</p>
          </div>
          <div className="Feature">
            <img src={feature2} alt="Feature 2" style={curvedImageStyle} />
            <h3>Easy Navigation</h3>
            <p>Explore artworks conveniently categorized by genre, style, and artist.</p>
          </div>
          <div className="Feature">
            <img src={feature3} alt="Feature 3" style={curvedImageStyle} />
            <h3>Interactive Gallery</h3>
            <p>Immerse yourself in our interactive gallery experience with high-quality images of artworks.</p>
          </div>
          <div className="Feature">
            <img src={feature3} alt="Feature 3" style={curvedImageStyle} />
            <h3>Interactive Gallery</h3>
            <p>Immerse yourself in our interactive gallery experience with high-quality images of artworks.</p>
          </div>
        </Slider>
      </div>
      <Footer />
    </div>
  );
}

export default Home;