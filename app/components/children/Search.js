// Include React
var React = require("react");

// Creating the Search component
var Search = React.createClass({

  getInitialState: function() {
     return { topic: "", startYear: "", endYear: "" };
  },
  //this function will respond to user input
  handleTopicChange: function(event) {
    this.setState({ topic: event.target.value });
  },
  handleStartChange: function(event) {
    this.setState({ startYear: event.target.value });
  },
  handleEndChange: function(event) {
    this.setState({ endYear: event.target.value });
  },
  //function after user submits
  handleSubmit: function(event) {
    console.log('CLICKED!');
    console.log(this.state.topic);
    event.preventDefault();
    //sends the parent the search parameters
    this.props.setSearch(this.state.topic, this.state.startYear, this.state.endYear);
  },
  // Render the function
  render: function() {
    return (
      <div className="card z-depth-4 center-align">
        <h3 className="panelTitle">Search</h3>

        <form className="card-panel">

          <div className="input-field">
            <input type="text" placeholder="Topic (required)" id="topic" onChange={this.handleTopicChange} className="validate" required></input>
          </div>

          <div className="input-field">
            <input type="number" maxlength="4" placeholder="Start Year (required)" id="startYear" onChange={this.handleStartChange} className="validate" required></input>
          </div>

          <div className="input-field">
            <input type="number" maxlength="4" placeholder="End Year (required)" id="endYear" onChange={this.handleEndChange} className="validate" required></input>
          </div>

          <br></br>
          <button className="waves-effect waves-light btn" type="submit" onSubmit={this.handleSubmit}>Submit</button>
        </form>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;