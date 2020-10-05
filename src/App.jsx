import React from 'react';
import './App.css';
import Preview from './components/Preview/Preview';
import About from './components/About/About'
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Preview/>
      <About/>
      <Technologies/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
