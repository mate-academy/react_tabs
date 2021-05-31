import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './Tabs.scss';

const Tabs = ({ tabs, currentTab, choiceTab }) => (
  <div className="tabs">
    <div className="tabs__container">
      {tabs.map(tab => (
        /* eslint-disable */
        <a
          className={cn(
            'tabs__item',
            { 'tabs__item--active': tab.id === currentTab.id },
          )}
          key={tab.id}
          href="#"
          onClick={() => {
            if (tab.id !== currentTab.id) {
              choiceTab(tab);
            }
          }}
        >
          {tab.title}
        </a>
        /* eslint-enable */
      ))}
      <div className="tabs__content">{currentTab.content}</div>
    </div>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf({}).isRequired,
  currentTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  choiceTab: PropTypes.func.isRequired,
};

export default Tabs;
