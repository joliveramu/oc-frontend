
let yo = {
  name: "John",
  lastName: "Oliver"
};

class Main extends React.Component {
  render() {
    return(
    <div>
      <Oliver 
      name="John Oliver," 
      lastName="Amurao" />
    </div>);
  }
}

function Oliver({name, lastName})
{
  return(
    <div>
      My name is 
      <h1>{name} {lastName}</h1>
    </div>
  );
}


ReactDOM.render(<Main />, document.getElementById('example'))