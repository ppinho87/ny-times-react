import React from "react";

const style = {
  input: {
    fontSize: '18px',
    border: 'none',
    borderBottom: '1px solid #023336',
    background: 'transparent',
    width: '75%'
  },
  group: {
    margin: '10px'
  }
};

export const Input = props =>
  <div style={style.group}>
    <input style={style.input} class="validate active" {...props} />
    <span class="highlight"></span>
    <span class="bar"></span>
  </div>
