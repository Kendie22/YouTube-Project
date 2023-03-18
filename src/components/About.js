import React from "react";
import "./About.css";


export default function About() {
  const projectBio =
    "This project was built by a team of 3 developers. We used a React framework to create a Youtube clone that allows the user to search & display a single video as well as the ability to share & send any video. ";

  const shaqFredBio = "Shaquala's Bio";
  "I am a cat lover. I love God and have 2 daughters who bring me joy.I strive for greatness and want to pay it forward so that others may have opportunities to fulfill their dreams."
  const kerrideneBio =
    "Kerridene is a dog mom, an avid gardner & enjoys spending time with her family & friends.";
  const tayBrooksBio =
    "Taylor is an aspiring engineer, mother & lover of crafts. While she is new to coding, she looks forward to learning more about the development of web applications & building out more personal & team projects. ";

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

      <a href={"https://github.com/shaqfred"}>Shaquala's GitHub Link</a>

      <p>{kerrideneBio}</p>

      <a href={"https://github.com/Kendie22"}>Kerridene's GitHub Link</a>

      <p>{tayBrooksBio}</p>

      <a href={"https://github.com/taylorbrooks007"}>Taylor's GitHub Link</a>
    </div>
  );
}
