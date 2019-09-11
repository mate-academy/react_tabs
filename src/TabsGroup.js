import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const TabsGroup = ({ tabs, activeId, handleClick }) => (
  <nav>
    <ul>
      {tabs.map(tab => (
        <Tab
          key={tab.id}
          tab={tab}
          activeId={activeId}
          handleClick={handleClick}
        />
      ))}
    </ul>
  </nav>
);

TabsGroup.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number,
  })).isRequired,
  activeId: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
};

TabsGroup.defaultProps = {
  handleClick: null,
};

export default TabsGroup;
