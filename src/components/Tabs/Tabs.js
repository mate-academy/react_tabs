import React from 'react';
import PropTypes from 'prop-types';
import { TabItem } from '../TabItem/TabItem';

export const Tabs = ({ tabs, selectedIndex, onClick }) => (
  <div className="box">
    <div className="tabs is-left is-boxed">
      <ul>
        {tabs.map((tab, index) => (
          <TabItem
            isActive={selectedIndex === index}
            title={tab.title}
            onClick={() => onClick(index)}
          />
        ))}
      </ul>
    </div>
    <p>{tabs[selectedIndex].content}</p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,

  selectedIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
