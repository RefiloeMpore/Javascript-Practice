function Header({ course }) {
  return <h1>{course}</h1>;
}

function Part({ name, exercises }) {
  return <p>{name} {exercises}</p>;
}

function Content({
  part1Name, part1Exercises,
  part2Name, part2Exercises,
  part3Name, part3Exercises,
}) {
  return (
    <div>
      <Part name={part1Name} exercises={part1Exercises} />
      <Part name={part2Name} exercises={part2Exercises} />
      <Part name={part3Name} exercises={part3Exercises} />
    </div>
  );
}

function Total({ total }) {
  return <p>Number of exercises {total}</p>;
}

function App() {
  const name = 'Half Stack application development';
  const a = 10;
  const b = 7;
  const c = 14;

  return (
    <div>
      <Header course={name} />
      <Content
        part1Name="Fundamentals of React"
        part1Exercises={a}
        part2Name="Using props to pass data"
        part2Exercises={b}
        part3Name="State of a component"
        part3Exercises={c}
      />
      <Total total={a + b + c} />
    </div>
  );
}

export default App;

