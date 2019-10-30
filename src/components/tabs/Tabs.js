import React from 'react';
import './App.css';

function Tabs(props) {
  // eslint-disable-next-line react/prop-types
  const { tabs, onTabSelected } = props;

  return (
    <>
      {
        tabs.map((tab, index) => (
          <button
            type="button"
            key={tab.title}
            className="tab"
            onClick={() => onTabSelected(index)}
          >
            {tab.title}
          </button>
        ))
      }
    </>
  );
}

export default Tabs;
