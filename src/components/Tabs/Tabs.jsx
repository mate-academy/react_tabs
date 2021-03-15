import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Tabs = React.memo(
  ({ domID, tabs, selectedTab, onTabSelected }) => (
    <section id={domID}>
      <nav className="nav nav-tabs">
        {tabs.map(tab => (
          <a
            key={tab.id}
            href={`#${domID}`}
            className={classNames({
              'nav-item': true,
              'nav-link': true,
              active: selectedTab.id === tab.id,
            })}
            onClick={() => {
              if (tab.id !== selectedTab.id) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </a>
        ))}
      </nav>
      <p>
        {selectedTab.content}
      </p>
    </section>
  ),
);

const tabObjectType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  domID: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(tabObjectType).isRequired,
  selectedTab: tabObjectType.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
