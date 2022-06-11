import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

function Slider() {
  return (
    <Carousel className='mx-auto w-auto my-5'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/future-abstract-technology-background_1406-110.jpg?t=st=1654947955~exp=1654948555~hmac=9ad3e2b329efeb425f20199f1a52011d8c17dcd3f819c8873eb79feac399eaea&w=826"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Cryptography</h3>
            <p>
                Cryptography is the study of techniques for encrypting and decrypting information.
            </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src="https://i0.wp.com/revisesociology.com/wp-content/uploads/2021/07/types-of-cyber-crime.jpeg?ssl=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Network Security</h3>
          <p>Saving ourselves by just encrypting data is not enough</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/cyber-attack-with-unrecognizable-hooded-hacker-using-virtual-reality-digital-glitch-effect_146671-18944.jpg?t=st=1654945329~exp=1654945929~hmac=f5f0c4af6984c1a89e1861dbbe98454bac9013c4a0139f3670222fbcfbdd4c69&w=900"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Secure Communication</h3>
          <p>
            Secure communication requires modern encryption and decryption technologies
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider