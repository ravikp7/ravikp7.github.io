import React, { Component } from 'react';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import WorkPage from './pages/Work';
import style from './App.module.css';

class App extends Component {
  render() {
    const title = 'Ravi Kumar Prasad';
    const navItems = ['Projects', 'Blog', 'About', 'Contact'];
    return (
      <div className={style.app}>
        <header className={style.appHeader}>
          <Header {...{ title, navItems }} />
        </header>
        <MainPage />
        <WorkPage />
      </div>
    );
  }
}

export default App;
