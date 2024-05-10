import React, { useEffect } from 'react';
import '../css/about.css'; // Import your CSS file
import painting from '../assets/img/realCanvas.png';
import Navbar from './GalleryComponents/NavbarGallery';
import $ from 'jquery';

export default function About() {
  useEffect(() => {
    const handleContactClick = (e) => {
      e.preventDefault();
      const targetId = $(e.target).attr('href');
      $('html, body').animate({ scrollTop: $(targetId).offset().top }, 100, 'linear');
    };

    $('a.contacthere').on('click', handleContactClick);

    return () => {
      $('a.contacthere').off('click', handleContactClick);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <section className="about-section text-center" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-Black mb-4">About Our Online Art Gallery</h2>
              <p className="text-Black-50">
                Welcome to our online art gallery, where creativity meets technology! Our gallery showcases a diverse collection of artworks from talented artists around the world. From paintings to sculptures, digital art to mixed media, we offer a wide range of pieces to suit every taste and style. At our online gallery, you can browse and purchase artworks from the comfort of your home. Our platform is designed to make discovering and collecting art easy and enjoyable. Thank you for visiting our online art gallery. We hope you enjoy exploring our collection and find the perfect piece to add to your collection!
              </p>
              <p className="text-white-50">
                Meet the Team:
                <ul>
                  <li><p>Sree ram neeraj</p></li>
                
                </ul>
              </p>
            </div>
          </div>
        </div>
        <img className="img-fluid" src={painting} alt="Gallery" />
      </section>
    </div>
  );
}