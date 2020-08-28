import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AboutYou from './pages/AboutYou';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/About-Yourself" component={AboutYou} />
        </Switch>
        <LoginModal />
        <SignUpModal />
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
