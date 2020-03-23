import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/content/Content';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <Content />
        </div>
      </BrowserRouter>
    )
  }
};

export default App;
