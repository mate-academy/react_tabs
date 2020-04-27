import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = ({ tabs, clickHandler, activeId }) => (
  <>
    {tabs.map(tab => (
      <Tab
        key={tab.id}
        tab={tab}
        clickHandler={clickHandler}
        activeId={activeId}
      />
    ))}
  </>
);

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  clickHandler: PropTypes.func.isRequired,
  activeId: PropTypes.number.isRequired,
};
