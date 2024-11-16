const container = document.querySelector(".container");

const careers = [
  "YouTuber.",
  "Freelancer.",
  "Content Creator.",
  "Web Developer.",
  "Instructor.",
];

let careerIndex = 0;
let characterIndex = 0;

updateCareer();
function updateCareer() {
  characterIndex++;

  // OUTPUT
  container.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</h1>`;
  // RECURSION
  if (characterIndex === careers[careerIndex].length) {
    characterIndex = 0;
    careerIndex++;
    if (careerIndex === careers.length) {
      careerIndex = 0;
    }
  }
  setTimeout(updateCareer, 200);
}
