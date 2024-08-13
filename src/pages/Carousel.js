import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import slide from '../assets/images/tshirt.png'
import avtaar from '../assets/avataar.png'
import v2 from '../assets/images/demo-products.png'
import av2 from '../assets/images/av2.jpg'

// import './TestimonialCarousel.css'; // Import your CSS file

const testimonials = [
  {
    avatar: avtaar,
    quote: 'This is a testimonial quote 1.',
    image: slide,
    altText: 'Person 1'
  },
  {
    avatar: av2,
    quote: 'This is a testimonial quote 2.',
    image: v2,
    altText: 'Person 2'
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  return (
    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="d-flex justify-content-center align-items-center mytestimonialbg">
              {/* Left Side - Testimonial */}
              <div className="w-50 d-flex flex-column align-items-start pe-3 myleft">
                <div className="d-flex align-items-center mb-3 myleftside" >
                  <img
                    src={testimonial.avatar}
                    className="rounded-circle me-3 myroundcls"
                    alt={`Avatar of ${testimonial.altText}`}
                    style={{ width: '50px', height: '50px' }}
                  />
                  <p className="mb-0 quote-text">{testimonial.quote}</p> {/* Styled Quote */}
                </div>
              </div>
              {/* Right Side - Image */}
              <div className="w-50">
                <img
                  src={testimonial.image}
                  style={{ width: '500px', height:'500px', objectFit:'fill'}}
                  className="img-fluid rounded"
                  alt={`Testimonial image of ${testimonial.altText}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Carousel controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default TestimonialCarousel;
