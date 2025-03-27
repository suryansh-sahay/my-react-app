import React from 'react';
import About from './sections/About';
import Skills from './sections/Skills';
import Hobbies from './sections/Hobbies';
import Academic from './sections/Academic';
import './App.css';

function App() {
  return (
    <div className="p-6 space-y-6">
      <About />
      <Skills />
      <Hobbies />
      <Academic />
    </div>
  );
}

export default App;
