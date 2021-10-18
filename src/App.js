import React from 'react';
import './App.css';
import Header from './component/header/Header.component';
import Ziphandle from './component/filehandle/Ziphandle.component';
import Bodypage from './component/body/Bodypage.component';
import Footer from './component/footer/Footer.component';

function App() {
  return (
    <div className="mainpage">
      <Header/>
      <Ziphandle />
      <Bodypage />
      <Footer />
    </div>
  );
}

export default App;
