import React, { Component } from 'react';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import style from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <header className={style.appHeader}>
          <Header />
        </header>
        <MainPage />
      </div>
    );
  }
}

export default App;
