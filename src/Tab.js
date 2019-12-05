import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ handleChangeTab, activeTab, tab, index }) => {
  const tabClass = `tab-item
    ${activeTab === index ? 'tab-item tab-item--selected' : ''}`;

  return (
    <li
      className={tabClass}
    >
      <button
        type="button"
        className="tab-item"
        onClick={() => handleChangeTab(index)}
      >
        {tab.title}
      </button>
    </li>
  );
};

Tab.propTypes = {
  handleChangeTab: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired,
  tab: PropTypes.shape(
    PropTypes.string,
  ).isRequired,
  index: PropTypes.number.isRequired,
};

export default Tab;
