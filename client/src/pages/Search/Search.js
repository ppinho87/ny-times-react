import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import SaveBtn from "../../components/SaveBtn";

const style = {
  panel: {
    backgroundColor: '#023336',
    color: 'whitesmoke'
  }
};

class Search extends Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  searchArticles = (event) => {
    event.preventDefault();
    API.findArticles(this.state.topic, this.state.startYear, this.state.endYear)
      .then(res => 
          {
          this.setState({articles: res.data.response.docs});
          console.log(this.state.articles);
        }
        )
        .catch( err => console.log(err));
  };

  saveArticleSubmit = (headline, link, date) => {
    console.log("Working");
      API.saveArticle({
        headline: headline,
        link: link,
        date: date
      })
        .then(res => console.log("saved article"))
        .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <div className="panel panel-primary">
              <div className="panel-heading" style={style.panel}><h4>Search</h4></div>
              <div className="panel-body"> 
                <form>
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="topic"
                    placeholder="Topic"
                  />
                  <Input
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    name="startYear"
                    placeholder="Start Year"
                  />
                  <Input
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    name="endYear"
                    placeholder="End Year"
                  />
                  <FormBtn
                    disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
                    onClick={this.searchArticles}
                  >
                    Submit
                  </FormBtn>
                </form>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.state.articles.length ? (
              <div className="panel panel-primary">
                <div className="panel-heading" style={style.panel}><h4>Results</h4></div>
                <div className="panel-body">
                  <List>
                    {this.state.articles.map(article => (
                      <ListItem
                        key={article._id}
                        headline={article.headline.main}
                        link={article.web_url}
                        date={article.pub_date}
                      >
                        <SaveBtn onClick={() => this.saveArticleSubmit(article.headline.main, article.web_url, article.pub_date)} />
                      </ListItem>))}
                  </List>
                </div>
              </div>
              ) : (
              <ul className="list-group">
                <li className="list-group-item"><h3><em>Enter Search Term to Begin</em></h3></li>
              </ul>)
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
