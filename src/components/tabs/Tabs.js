import React from 'react';
import PropTypes from 'prop-types';

function Tabs(props) {
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

Tabs.propTypes = {
  tabs: PropTypes.element.isRequired,
  onTabSelected: PropTypes.element.isRequired,
};

export default Tabs;
