export default function About() {
  const projectBio = "This project was built by a team of 3 developers.  ";

  const shaqFredBio = "";
  const kerrideneBio =
    "Kerridene is a dog mom, an avid gardner & enjoys spending time with her family & friends.";
  const tayBrooksBio =
    "Taylor is an aspiring engineer, mother & lover of crafts.";

  return (
    <div>
      <h2 className>About Our Project</h2>
      <p>{projectBio}</p>
      <h2>About the Developers</h2>
      <p>{shaqFredBio}</p>
      <p>{kerrideneBio}</p>
      <p>{tayBrooksBio}</p>
    </div>
  );
}
