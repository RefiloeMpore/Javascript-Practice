

function Header({course}) {
  return <h1>{course}</h1>;
}



function Content({part1, part2, part3}){
return (
  <div>
  <p>{part1}</p>
  <p>{part2}</p>
  <p>{part3}</p>
  </div>
);
}

function Total({total}) {
  return  <p>Number of exercises {total}</p>;
  
}

function App() {
  const name = 'Full stack application development';
  const a= 10;
  const b= 7;
  const c=14; 

  return (
    <div>
      <Header course={name}/>
      <Content
      part1={`Fundamentals of React ${a}`}
      part2={`Using props to pass data ${b}`}
      part3={`State of a component ${c}`}
      />
      <Total total ={a+b+c}/>
    </div>
  );


}


export default App;