import React from 'react';
import content from '../data/content.json';

const About = () => {
    return (
        <section className="p-4 bg-gray-100 rounded-lg shadow-lg">  
            <h2 className="text-2xl font-bold mb-2">My Skills</h2>
            <p> {content.skills}</p>
         </section>

    );
};      

export default About;

