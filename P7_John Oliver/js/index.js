
let yo = {
  name: "John",
  lastName: "Oliver"
};

class Main extends React.Component {
  render() {
    return(
    <div>
      <Header />
      <Map />
      <LeaveReview />
      <Footer />
    </div>);
  }
}

let Header = () =>
{
  return(
    <div className="fixed-top container-fluid navbar-expand-md navbar-light bg-info">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li class="nav-item">
            <a className="navbar-brand" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand" href="#">Restaurant Maps</a>
          </li>
          <li className="nav-item">
            <a className="navbar-brand" href="#">Leave a Review</a>
          </li>

        </ul>
      </div>
    </div>
  );
}

let Map = () =>
{
  return(
    <div className = "mt-5">
      <h1>This is Map!</h1>
      
    </div>
  );
}

let LeaveReview = () =>
{
  return(
    <div className = "m5">
      <h1>Leave Review!</h1>
    </div>
  )
}

let Footer = () =>
{
  return(
    <div className = "fixed-bottom container-fluid">
      <h1>This footer</h1>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('example'))