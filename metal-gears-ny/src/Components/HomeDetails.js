import { Carousel, Container, Button } from "react-bootstrap";
 import { useState } from "react";

import one from "./Images/one.jpeg";
import two from "./Images/two.jpeg";
import three from "./Images/three.jpeg";

// import "./HomeDetails.css";
// export default function Home() {
//   return (
//     <div className="home-details">
 
//       <Container className="home-container">
//         <Carousel
//           className="carousel"
//           variant="dark"
//           style={{ width: "50rem", height: "700px" }}
//         >
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={one}
//               alt="First slide"
//               width="500px"
//               height="700px"
//             />
//             <Carousel.Caption>
//               <h3>Welding</h3>
//               <p>
//                 {" "}
//   Metal Gear Quote
//               </p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={two}
//               alt="Second slide"
//               width="500px"
//               height="700px"
//             />

//             <Carousel.Caption>
//               <h3>BLUE SUMMER TANK TOP </h3>
//               <p>
//            quotes
//               </p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={three}
//               alt="Third slide"
//               width="500px"
//               height="700px"
//             />

//             <Carousel.Caption>
//               <h3>welder pic</h3>
//               <p>
//            more words
//               </p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </Container>
//       <Button className="shop-button" href="/shirts" variant="dark">
//       Hire Us
//       </Button>
//     </div>
//   );
// }


function HomeDetails() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (<div className="jumbo">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={one}
          alt="First slide"
        />


{/* 


        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={one}
          alt="Second slide"
        /> */}







        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={three}
          alt="Third slide"
        />

</Carousel.Item>



{/* 
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
    </div>
  );
}

export default HomeDetails;