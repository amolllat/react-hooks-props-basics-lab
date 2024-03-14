import React from "react";
import Links from "../components/Links"

function About({ bio }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.trim() !== "" && <p>{bio}</p>}
      <img src="https:i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* MY <Links /> component here */}
      <Links />
    </div>
  );
}

export default About;
