
// let restoArr = [];
// let restoRating = [];
// let restoComment = [];

// class Main extends React.Component {
//   render() {
//     return(
//     <div>
//       <Header />
//       <LeaveReview />
//     </div>);
//   }
// }

// let Header = () =>
// {
//   return(
//     <div className="fixed-top container-fluid navbar-expand-md navbar-light bg-info">
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li class="nav-item">
//             <a className="navbar-brand" href="#">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="navbar-brand" href="#">Restaurant Maps</a>
//           </li>
//           <li className="nav-item">
//             <a className="navbar-brand" href="#">Leave a Review</a>
//           </li>

//         </ul>
//       </div>
//     </div>
//   );
// }



// let LeaveReview = () =>
// {
//   return(
//     <div className = "mt-5">
    //   <h1>Leave Review!</h1>
    //   <hr/>
      
    //       <div className="form-group">
    //           <label>Restaurant Name</label><br/>
    //           <input type = "text" placeholder = "Enter restaurant name" id = "txtRestaurant" className = "form-control"/>
    //       </div>
    //       <div className="form-group">
    //           <label>Restaurant Rating</label><br/>
    //           <input type = "number" min = "1" max = "5" id="txtRating" className = "form-control" placeholder="Select 1 to 5"/>
    //       </div>
    //       <div className="form-group">
    //           <label>Comments</label><br/>
    //           <textarea id = "txtReview" className="form-control" rows="3" placeholder = "Enter your comments here"></textarea>
    //       </div>
    //       <button type="submit" className="btn btn-primary" onClick={submitReview}>Submit Review</button>
    //     <p id = "displayMessage">
    //     </p>
    // </div>
//   )
// }

// let submitReview = () =>
// {
 
  
//   // restoArr.push(txtRestaurant.value);
//   // restoRating.push(txtRating.value);
//   // restoComment.push(txtReview.value);
 

//   // let data = {
//   //   restaurantName : restoArr,
//   //   rating: restoRating,
//   //   txtComment: restoComment
//   // };
//   localStorage.setItem("reviewRecords",JSON.stringify(txtRestaurant.value));
//   //console.log(JSON.parse(localStorage.getItem("reviewRecords")));
//   //displayMessage.textContent = JSON.parse(localStorage.getItem("reviewRecords"));
//   displayMessage.textContent = localStorage.getItem("reviewRecords");
// }





// ReactDOM.render(<Main />, document.getElementById('example'))
// fetch("js/data.json")
//   .then(response => response.json())
//   .then(json => console.log(json));

var db = openDatabase('restaurant-reviews', '1.0', 'Test DB', 2 * 1024 * 1024);
var msg; 

//This function inserts data in the Reviews table
function saveData()
{
  db.transaction(function (tx) {   
    tx.executeSql('CREATE TABLE IF NOT EXISTS Reviews (restaurant_name text, score int, comment text);'); 
    tx.executeSql('INSERT INTO Reviews (restaurant_name, score, comment) VALUES (?,?,?);',[txtRestaurant.value, txtRating.value, txtReview.value])
    window.alert("Review recorded!");
    window.location.reload();
  });
}

// This function displays all the records in the Reviews table
db.transaction(function (tx) { 
  tx.executeSql('SELECT * FROM Reviews;', [], function (tx, results) { 
    var len = results.rows.length, i; 
    for (i = 0; i < len; i++) { 
        msg = "<li class = 'list-group-item d-flex justify-content-between align-items-center mb-1'><b>" + results.rows.item(i).restaurant_name + "</b>"; 
        msg += "<span class='badge badge-primary badge-pill'>"+ results.rows.item(i).score+"</span>";
        msg += "<p>" + results.rows.item(i).comment +"</p></li>";
      document.querySelector('#list').innerHTML +=  msg; 
    } 
  }, null); 
}); 



