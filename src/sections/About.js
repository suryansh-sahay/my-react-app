import React from "react";
import content from "../data/content.json";

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <p>{content.about}</p>
    </section>
  );
};

export default About;
