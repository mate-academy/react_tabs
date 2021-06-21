import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '../Tab';
import './Tabs.scss';

export function Tabs({
  tabs,
  onClickTab,
  selectedTab,
}) {
  return (
    <div className="Tabs">
      <ul className="Tabs__list">
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            title={tab.title}
            id={tab.id}
            onClickTab={onClickTab}
            selectedTab={selectedTab}
          />
        ))}
      </ul>
      <div className="Tabs__content">
        {tabs.map((tab) => {
          if (tab.id !== selectedTab) {
            return null;
          }

          return tab.content;
        })}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClickTab: PropTypes.func.isRequired,
  selectedTab: PropTypes.string,
};

Tabs.defaultProps = {
  selectedTab: '',
};
