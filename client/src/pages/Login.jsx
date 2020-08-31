import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Container, Button } from 'react-bootstrap';
const Login = () => {
  const { setIsLoginModalOpen, setSignUpModalOpen } = useContext(AppContext);

  return (
    <Container>
      <Button onClick={() => setIsLoginModalOpen(true)}>Log In</Button>
      {/* <LoginModal /> */}
      <Button onClick={() => setSignUpModalOpen(true)}>
        Listen to Your Podcast!
      </Button>
    </Container>
  );
};

export default Login;