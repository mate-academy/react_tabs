import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


import './Tabs.scss';

export function Tabs({ tabs, currentIndex, selectedTab }) {
  return (
    <ul className="tabs">
      {tabs.map((tab, id) => (
        <li className="tab" key={tab.id}>
          <button
            className={classnames('btn',
              { 'btn-active': currentIndex === id })
            }
            onClick={() => selectedTab(id)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  );
}


Tabs.propTypes = {
  selectedTab: PropTypes.func,
};


