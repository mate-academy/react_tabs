import React from 'react';
import PropTypes from 'prop-types';

const TabsContainer = ({ tabs, index }) => (
  tabs.map(tab => (
    <div
      className={index === tab.title ? 'Tabs-content' : 'Tabs-content hiden'}
      key={tab.title}
    >
      {tab.content}
    </div>
  ))
);

TabsContainer.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.string.isRequired,
};

export default TabsContainer;
