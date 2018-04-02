var React = require("react");

//sub-components
var Search = require("./children/Search.js");
var Results = require("./children/Results.js");
var Saved = require("./children/Saved.js");

var helpers = require("./utils/helpers.js");

//creating Main Component
var Main = React.createClass({
  getInitialState: function(){
    return { search: ["","",""], results: [], saved: []};
  },
  //loads when page is ready
  componentDidMount: function(){
    //gets all saved articles
    helpers.getSaved().then(function(response) {
      console.log("Saved: " + response.data);
      this.setState({ saved: response.data });
    }.bind(this));
  },
  //any time a component changes, it updates
  componentDidUpdate: function(){
    var searchTerms = this.state.search;
      // Run the query for the address
      helpers.runQuery(searchTerms[0], searchTerms[1], searchTerms[2]).then(function(data) {
        if(data !== this.state.results){
          console.log("Results," + data);
          this.setState({ results: data });

          // After we've received the result... then post the search term to our history.
          helpers.postSaved(this.state.search).then(function() {
            console.log("Updated!");

            // After we've done the post... then get the updated history
            helpers.getSaved().then(function(response) {
              console.log("Current Saved", response.data);

              console.log("Saved", response.data);

              this.setState({ saved: response.data });

            }.bind(this));
          }.bind(this));
        }
      }.bind(this));
  },
  //lets children update to parent
  setSearch: function(topic, startYear, endYear){
    this.setState({ search: [topic, startYear, endYear] });
  },
  //Render the function
  render: function(){
    return (
      <div className="container">

        <div className="row">
          <div className="card-panel z-depth-4 panelTitle center-align">
            <h2>New York Times: Article Scrubber</h2>
            <h5>Search for and annotate articles of interest!</h5>
          </div>
        </div>

        <div className="row col s12">
          <Search setSearch={this.setSearch} />
        </div>

        <div className="row col s12">
          <Results results={this.state.results} />
        </div>

        <div className="row col s12">
          <Saved saved={this.state.saved} />
        </div>

      </div>
    );
  }
});

module.exports = Main;