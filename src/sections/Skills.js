import React from "react";
import content from "../data/content.json";

const Skills = () => {
  return (
    <section>
      <h2>My Skills</h2>
      <ul>
        {content.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
