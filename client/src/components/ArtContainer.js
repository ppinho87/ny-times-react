import React, {Component} from 'react';
import Header from "./Header/Header";
import Search from "./Search/Search";
import Results from "./Results/Results";
import Saved from "./Saved/Saved";
import API from "./../utils/API";

class ArtContainer extends Component {
  state = {
    search: "",
    start: "",
    end: "",
    result: [],
    savedArticles: []
  }

  componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
    API.getSavedArticles().then((res) => {
      this.setState({savedArticles: res.data});
    }).catch((err) => {
      console.log(err);
    });
  };

  deleteArticle = (id) => {
    API.deleteArticle(id).then((res) => {
      this.loadArticles()
    }).catch((err) => {
      console.log(err);
    });
  };

  handleSaveButton = (title, url, date, image) => {
    API.saveArticles({title, url, date, image}).then((res) => {
      this.loadArticles()
    }).catch((err) => {
      console.log(err);
    });
  };

  handleFormSubmit = (event) => {
    this.setState({search: ""});
    event.preventDefault();
  };

  handleInputChange = (event) => {
    this.setState({search: event.target.value});
  };

  handleButtonClick = () => {
    if (this.state.search !== "") {
      API.getData(this.state.search).then((res) => {
        this.setState({result: res.data.response.docs})
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  render() {
    return (
      <div>        
        <div className='container'>        
          <Header/>
          <Search handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} handleButtonClick={this.handleButtonClick} search={this.state.search}/>
          <Results result={this.state.result} handleSaveButton={this.handleSaveButton}/>
          <Saved savedArticles={this.state.savedArticles} deleteArticle={this.deleteArticle}/>
        </div>
      </div>
    );
  }
}

export default ArtContainer;