import React from "react";

const style = {
	saveButton: {
	  backgroundColor: '#023336',
	  color: 'whitesmoke'
	}
};

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => (
	<button  style={style.saveButton} className="btn btn-primary" {...props}>
		Save
	</button>
);

export default SaveBtn;
