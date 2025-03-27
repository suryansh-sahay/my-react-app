import React from 'react';
import content from '../data/content.json';

const About = () => {
    return (
        <section className="p-4 bg-gray-100 rounded-lg shadow-lg">  
            <h2 className="text-2xl font-bold mb-2">My Academics</h2>
            <p><strong>Degree:</strong> {content.academic.degree}</p>
            <p><strong>Major:</strong> {content.academic.major}</p>
            <p><strong>University:</strong> {content.academic.university}</p>
            <p><strong>Year:</strong> {content.academic.year}</p>
         </section>
    );
};      

export default About;
