import React from 'react';
import PropTypes from 'prop-types';

const TabItem = ({
  handleChangeTab, setActiveTab, tab, index,
}) => {
  const tabClass = `tab_title
    ${setActiveTab === index ? 'tab__title--active' : ''}`;

  return (
    <li
      className={tabClass}
    >
      <button
        type="button"
        className="button"
        onClick={() => handleChangeTab(index)}
      >
        {tab.title}
      </button>

    </li>
  );
};

TabItem.propTypes = {
  handleChangeTab: PropTypes.func.isRequired,
  setActiveTab: PropTypes.number.isRequired,
  tab: PropTypes.shape(
    PropTypes.sting,
  ).isRequired,
  index: PropTypes.number.isRequired,
};

export default TabItem;
