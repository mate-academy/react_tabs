import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTab, onSelectedTab }) => {
  const onSelectedTabLink = (event, tab) => {
    event.preventDefault();
    onSelectedTab(tab);
  };

  return (
    <>
      <ul className="tabList">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={(tab.id === selectedTab.id)
              ? 'tabList__item selected'
              : 'tabList__item'}
          >
            <a
              href="/"
              className="tabList__link"
              onClick={event => onSelectedTabLink(event, tab)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <p>{selectedTab.content}</p>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  selectedTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onSelectedTab: PropTypes.func.isRequired,
};
