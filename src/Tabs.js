import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTab, onTabClick }) => {
  const onTabClickHandler = (tab, event) => {
    event.preventDefault();

    if (tab.id !== selectedTab.id) {
      onTabClick(tab);
    }
  };

  return (
    <div>
      <ul className="tabList">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === selectedTab.id
              ? 'tabList__item selected'
              : 'tabList__item'}
          >
            <a
              href=" "
              className="tabList__link"
              onClick={event => onTabClickHandler(tab, event)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <p>
        {selectedTab.content}
      </p>
    </div>

  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onTabClick: PropTypes.func.isRequired,
};
