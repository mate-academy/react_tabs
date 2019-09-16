import React from 'react';

const Tabs = props => (
  <div>
    <button type="button" onClick={props.onChangeText}>{props.title}</button>
  </div>
);

export default Tabs;
