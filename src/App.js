import React, { Component } from 'react';
import Header from './components/Header';
import MainPage from './pages/MainPage';
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
      </div>
    );
  }
}

export default App;
