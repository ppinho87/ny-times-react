// Include React
var React = require("react");

var helpers = require("../utils/helpers.js");

// Creating the Saved component
var Saved = React.createClass({
  //delete saved article
  handleDelete: function(event) {
    var articleID = event.target.value;

    helpers.deleteSaved(articleID).then(function(response){
      console.log("Deleted article");
    }.bind(this));
  },
  //Render the function
  render: function() {
    return (
      <div className="panel card z-depth-4 center-align">
        <h3 className="panelTitle">Saved</h3>
        
        <div className="savedBox">
          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.saved.map(function(search, i) {
              return (
                <li key={search._id}>
                  <strong><a href={search.web_url} className="left-align" target="_blank">{search.title}</a></strong>
                    <i> {search.pub_date.substring(0,10)}</i>
                  <span>
                    <button className="waves-effect waves-light btn right-align" onClick={this.handleDelete} value={search._id}>Remove</button>
                  </span>
                </li>
              );
            })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;