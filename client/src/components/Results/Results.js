import React from 'react';
import "./Results.css";
import Default from "./../../image/default.png";

const Results = (props) => {
	return (
		<div className="row col s12">
			<div className="card z-depth-4 center-align">
				<h3 className="card-header">Results</h3>
				<div className='card-body'>
					{props.result.map((article) => {
						const image = Default || `https://www.nytimes.com/${article.multimedia[0].url}`;
						return(
							<div key={article._id}>
								<div className='article-display row'>
									<a href={article.web_url} target='_blank' className='col-md-4'><img src={image} className='img-responsive' alt='thumbnail'/></a>
								<div className='col-md-3'>
									<h4>Title: {article.headline.main}</h4>
								</div>
								<div className='col-md-3'>
									<h4>Published: {article.pub_date}</h4>
								</div>
									<button onClick={() => props.handleSaveButton(article.headline.main, article.web_url, article.pub_date, image)} className='btn btn-sm btn-primary col-md-2'>save</button>
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
export default Results

	