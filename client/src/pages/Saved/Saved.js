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

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
          this.setState({articles: res.data})
        )
      .catch(err => console.log(err));
  };

  deleteArticleSubmit = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  }

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
            {this.state.articles.length ? (
              <div className="panel panel-primary">
                <div className="panel-heading" style={style.panel}><h4>Saved Articles</h4></div>
                <div className="panel-body">
                  <List>
                    {this.state.articles.map(article => (
                      <ListItem
                        key={article._id}
                        headline={article.headline}
                        link={article.link}
                        date={article.date}
                      >
                        <DeleteBtn onClick={() => this.deleteArticleSubmit(article._id)} />
                      </ListItem>))}
                  </List>
                </div>
              </div>
              ) : (
              <ul className="list-group">
                <li className="list-group-item"><h3><em>No Saved Articles</em></h3></li>
              </ul>)
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
