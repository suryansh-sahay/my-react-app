import React from "react";
import content from "../data/content.json";

const Hobbies = () => {
  return (
    <section>
      <h2>My Hobbies</h2>
      <ul>
        {content.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
};

export default Hobbies;
