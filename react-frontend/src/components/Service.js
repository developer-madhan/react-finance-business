import { Button, Card, Container } from "react-bootstrap";
import Slider from "react-slick";
const data = [
  {
    name: "Germaine Jambrozek",
    img: "https://picsum.photos/100",
    review: "ac nibh fusce lacus purus aliquet at feugiat non pretium",
  },
  {
    name: "Ralph Pittam",
    img: "https://picsum.photos/100",
    review:
      "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus",
  },
  {
    name: "Collin Abelwhite",
    img: "https://picsum.photos/100",
    review:
      "ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id",
  },
  {
    name: "Roderigo Mantha",
    img: "https://picsum.photos/100",
    review:
      "habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius",
  },
  {
    name: "Nanete Cokly",
    img: "https://picsum.photos/100",
    review:
      "sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra",
  },
  {
    name: "Emmy Dach",
    img: "https://picsum.photos/100",
    review:
      "posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin",
  },
  {
    name: "Savina Vaud",
    img: "https://picsum.photos/100",
    review:
      "iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris",
  },
  {
    name: "Sylvia Duckhouse",
    img: "https://picsum.photos/100",
    review:
      "cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
  },
  {
    name: "Axel Gullane",
    img: "https://picsum.photos/100",
    review:
      "sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet",
  },
  {
    name: "Whitney Eccleston",
    img: "https://picsum.photos/100",
    review:
      "hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien",
  },
];

const Service = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // LG view
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container id="service">
      <h1 className='my-5'>Our Service</h1>
      <Slider {...settings}>
        {data.map((d,i) => (
          <div className="text-center mt-4 mb-2 " key={i}>
            <Card style={{ width: "18rem", minHeight: "530px" }}>
              <Card.Img variant="top" src={d.img} />
              <Card.Body>
                <Card.Title>{d.name}</Card.Title>
                <Card.Text  >{d.review}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
};
export default Service;
