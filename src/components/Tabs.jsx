import React from 'react';
import PropTypes from 'prop-types';

const Tabs = React.memo(({
  tabs, selectedTabId, onTabSelected,
}) => (
  <ul className="tabs-list">
    {tabs.map(tab => (
      <li
        key={tab.id}
        className={selectedTabId === tab.id
          ? 'tabs-list__item tabs-list__item--active' : 'tabs-list__item'}
      >
        <a
          href={`#${tab.id}`}
          onClick={() => {
            if (tab.id !== selectedTabId) {
              onTabSelected(tab);
            }
          }}
        >
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
));

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ),
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

Tabs.defaultProps = {
  tabs: [],
};

export default Tabs;
