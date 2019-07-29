import React from 'react';
import PropTypes from 'prop-types';

const TabsHeader = ({ tabs, onTabSelected, index }) => {
  const tabsHeader = tabs.map(tab => (
    <li className="Tabs__items" key={tab.id}>
      <button
        onClick={onTabSelected}
        name={tab.id}
        type="button"
        className={
          index === tab.id ? 'button button--active' : 'button'
        }
      >
        {tab.title}
      </button>
    </li>
  ));

  return (
    <ul className="Tabs__list">
      {tabsHeader}
    </ul>
  );
};

TabsHeader.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired,
};

export default TabsHeader;
