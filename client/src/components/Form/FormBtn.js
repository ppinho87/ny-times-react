import React from "react";

const style = {
	formButton: {
	  backgroundColor: '#023336',
    color: 'whitesmoke',
    float: 'right'
	}
};

export const FormBtn = props =>
  <button {...props}  style={style.formButton} className="btn btn-primary">
    {props.children}
  </button>;
