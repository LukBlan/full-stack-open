import {Part} from "./Part.jsx";

function Content({parts}) {
  const part1 = parts[0];
  const part2 = parts[1];
  const part3 = parts[2];

  return (
    <>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </>
  )
}

export { Content }