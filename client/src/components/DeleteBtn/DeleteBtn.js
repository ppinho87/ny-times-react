import React from "react";

const style = {
	deleteButton: {
	  backgroundColor: '#023336',
	  color: 'whitesmoke'
	}
  };

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <button style={style.deleteButton} className="btn btn-primary" {...props}>
    Delete
  </button>
);

export default DeleteBtn;
