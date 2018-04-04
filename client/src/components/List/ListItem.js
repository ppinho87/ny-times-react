import React from "react";

export const ListItem = props =>
  <li className="list-group-item">
    <h3>
    	<span>
    		<em>{props.headline}</em>
    	</span>
    	<span className="btn-group pull-right">
    		<a href={props.link} rel="noopener noreferrer" target="_blank">
    			<button className="btn btn-default">View Article</button>
    		</a>
    		{props.children}
    	</span>
    </h3>
    <p>
    	Date Published: {props.date}
    </p>
  </li>;
