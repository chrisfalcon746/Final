import React from 'react';
import { Container, Nav, Button } from 'react-bootstrap';
import HomeNavBar from '../components/HomeNavBar';
import Logo from '../Photos/wyncastV2.png';
import Photo from '../Photos/HomePhoto.jpg';
const Home = () => {
  return (
    <>
      <HomeNavBar />
      <Container>
        <Nav.Item className="fullscreen d-flex flex-column align-items-center mb-2">
          <img src={Logo} />
        </Nav.Item>
        <Nav.Item className="d-flex flex-column align-items-center ">
          <img src={Photo} height="700px" />
        </Nav.Item>
        <Nav.Item className="fullscreen d-flex flex-column align-items-center mt-5">
          <Button href="/signup">Find the next podcast</Button>
        </Nav.Item>
      </Container>
    </>
  );
};

export default Home;
