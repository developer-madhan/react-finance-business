import React from "react";
import { Container } from "react-bootstrap";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import Quote from "../quote.png";

const Testimonial = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

  };

  return (
    <div className="testimonialsWrap" id="testimonials">
      <Container>
        <h1>Testimonials</h1>
        <Slider className="testimonialsList" {...settings}>
          {/* Client */}
          <div className="text-center my-4">
            <div className="clientimg">
              <img src={Quote} alt="" className="d-block mx-auto" />
            </div>
            <div className="rating">
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
            </div>
            <div className="clientname">Duis Consectetur</div>
            <div className="clientinfo">Designation Here</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisis ac justo at rhoncus. Etiam feugiat justo sed pulvinar
              venenatis. Maecenas ac ipsum eget dui accumsan gravida. Cras arcu
              velit, mollis et elementum eget, finibus et nulla.
            </p>
          </div>
          {/* Client */}
          <div className="text-center my-4">
            <div className="clientimg">
              <img src={Quote} alt="" className="d-block mx-auto" />
            </div>
            <div className="rating">
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
            </div>
            <div className="clientname">Duis Consectetur</div>
            <div className="clientinfo">Designation Here</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisis ac justo at rhoncus. Etiam feugiat justo sed pulvinar
              venenatis. Maecenas ac ipsum eget dui accumsan gravida. Cras arcu
              velit, mollis et elementum eget, finibus et nulla.
            </p>
          </div>
          {/* Client */}
          <div className="text-center my-4">
            <div className="clientimg">
              <img src={Quote} alt="" className="d-block mx-auto" />
            </div>
            <div className="rating">
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
            </div>
            <div className="clientname">Duis Consectetur</div>
            <div className="clientinfo">Designation Here</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisis ac justo at rhoncus. Etiam feugiat justo sed pulvinar
              venenatis. Maecenas ac ipsum eget dui accumsan gravida. Cras arcu
              velit, mollis et elementum eget, finibus et nulla.
            </p>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Testimonial;
