import React from 'react';
import './Tab.css';

function Tab(props) {
  return (
    <button
      type="button"
      onClick={props.tabOnClick}
      className={props.activeTab === props.index
        ? 'button active' : 'button'}
    >
      {props.title}
    </button>
  );
}

export default Tab;
