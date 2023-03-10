import React from "react";
import "./About.css";
import { Routes, Route, Navigate } from "react-router-dom";

export default function About() {
  const projectBio =
    "This project was built by a team of 3 developers. We used a React framework to create a Youtube clone that allows the user to search & display a single video as well as the ability to share & send any video. ";

  const shaqFredBio = "Shaquala's Bio";
  const kerrideneBio =
    "Kerridene is a dog mom, an avid gardner & enjoys spending time with her family & friends.";
  const tayBrooksBio =
    "Taylor is an aspiring engineer, mother & lover of crafts. While she is new to coding, she looks forward to learning more about the development of web applications & building out more personal & team porjects. ";

  return (
    <div style={{ textAlignVertical: "center", textAlign: "center" }}>
      <article key="about">
        {/* <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
        </Routes> */}
      </article>
      <h2>About Our Project</h2>
      <p>{projectBio}</p>
      <h2>About the Developers</h2>
      <p>{shaqFredBio}</p>
      <td>
        <a href={"https://github.com/shaqfred"}>Shaquala's GitHub Link</a>
      </td>
      <p>{kerrideneBio}</p>
      <td>
        <a href={"https://github.com/Kendie22"}>Kerridene's GitHub Link</a>
      </td>
      <p>{tayBrooksBio}</p>
      <td>
        <a href={"https://github.com/taylorbrooks007"}>Taylor's GitHub Link</a>
      </td>
    </div>
  );
}
