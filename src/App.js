import React, { useState } from 'react';
import About from './sections/About';
import Skills from './sections/Skills';
import Hobbies from './sections/Hobbies';
import Academic from './sections/Academic';
import "./styles.css";


const App = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-white">
      {/* Navigation Buttons */}
      <div className="flex space-x-4 mb-6">
        <button 
          className={`tab-button ${activeTab === "about" && "active"}`} 
          onClick={() => setActiveTab("about")}
        >
          About Me
        </button>
        <button 
          className={`tab-button ${activeTab === "skills" && "active"}`} 
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
        <button 
          className={`tab-button ${activeTab === "hobbies" && "active"}`} 
          onClick={() => setActiveTab("hobbies")}
        >
          Hobbies
        </button>
        <button 
          className={`tab-button ${activeTab === "academic" && "active"}`} 
          onClick={() => setActiveTab("academic")}
        >
          Academics
        </button>
      </div>

      {/* Dynamic Content */}
      <div className="content-box">
        {activeTab === "about" && <About />}
        {activeTab === "skills" && <Skills />}
        {activeTab === "hobbies" && <Hobbies />}
        {activeTab === "academic" && <Academic />}
      </div>
    </div>
  );
};

export default App;