import React from 'react';
import './Tab.css';
import { TabPropTypes } from '../../proptypes/proptypes';

const Tab = ({
  tab, onTabSelected, index, activeTab,
}) => {
  const className = i => (
    activeTab === i ? 'active item' : 'item'
  );

  return (
    <button
      type="button"
      className={className(index)}
      onClick={() => onTabSelected(index)}
    >
      {tab.title}
    </button>
  );
};

Tab.propTypes = TabPropTypes;

export default Tab;
