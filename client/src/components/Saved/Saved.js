import React from "react";

const Saved = (props) => {
  return(
    <div className="row col s12">
      <div className="card z-depth-4 center-align">
        <h3 className="card-header">Saved Articles</h3>
        <div className="card-body">
          {props.savedArticles.map((article) => {
            return (
              <div key={article._id}>
                <div className="article-display row">
                  <a href={article.url} target="_blank" className="col-md-4"><img src={article.image} className="img-responsive" alt="thumbnail"/></a>
                  <div className="col-md-3">
                    <h4>Title: {article.title}</h4>
                  </div>
                  <div className="col-md-3">
                    <h4>Saved Date: {article.date}</h4>
                  </div>
                  <button onClick={() => props.deleteArticle(article._id)} className="btn btn-sm btn-danger col-md-2">delete</button>
                </div>
                <hr/>
              </div>
            )
          }) || <h4>loading...</h4>}
        </div>
      </div>
    </div>
  )
};

export default Saved;