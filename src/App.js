import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/Main';
import AboutPage from './pages/About';
import WorkPage from './pages/Work';
import ContactPage from './pages/Contact';
import style from './App.module.css';

class App extends Component {
  render() {
    const title = 'Ravi Kumar Prasad';
    const navItems = ['Work', 'Blog', 'About', 'Contact'];
    return (
      <BrowserRouter>
        <div className={style.app}>
          <header className={style.appHeader}>
            <Header {...{ title, navItems }} />
          </header>
          <MainPage />
          <AboutPage />
          <WorkPage />
          <ContactPage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
