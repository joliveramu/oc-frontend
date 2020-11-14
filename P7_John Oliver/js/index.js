class Main extends React.Component {
  render() {
    return(
    <div>
      <Hi />
      </div>);
  }
}

class Hi extends React.Component{
  render(){
    return(
      <div>
        <h1>Hi</h1>
        <p>
          This is the Hi! class
        </p>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('example'))