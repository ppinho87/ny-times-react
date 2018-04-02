import React from 'react';
 const Button = (props) => {
 	return(
 		<button onClick={props.handleButtonClick} className="waves-effect waves-light btn">Search</button>
 	)	
 };

 export default Button;