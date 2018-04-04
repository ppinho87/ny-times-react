import React from "react";

const style = {
  header: {
    backgroundColor: '#023336',
    color: 'whitesmoke',
    display: 'inline-block',
    width: '100%'
  }
};

const Jumbotron = () =>
  <div style={style.header} className="jumbotron text-center">
    <h2>(ReactJS) New York Times Article Scrubber</h2>
    <h3>Search for and save articles of interest.</h3>
  </div>;

export default Jumbotron;
