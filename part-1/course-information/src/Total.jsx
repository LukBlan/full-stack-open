const Total = ({parts}) => {
  const part1 = parts[0];
  const part2 = parts[1];
  const part3 = parts[2];
  return <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
}

export { Total }