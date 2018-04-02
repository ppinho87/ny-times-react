import React from 'react';
import Input from './Input';
import Button from './Button';
import './Search.css';

const Search = (props) => {
	return(
		<div className="row col s12">
			<div className="card z-depth-4 center-align">
				<h3 className="card-header">Search</h3>
				<form className="card-panel" onSubmit={props.handleFormSubmit}>
					<div className="input-field">
						<Input handleInputChange ={props.handleInputChange} search={props.search}/>
					</div>
					<br></br>
					<Button handleButtonClick={props.handleButtonClick}/>
				</form>
			</div>
		</div>
	)
};
export default Search;