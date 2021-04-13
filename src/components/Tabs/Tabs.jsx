import React from 'react';
import './Tabs.scss';

import classNames from 'classnames';
import { propTypes } from '../../types';

export const Tabs = ({tabsList, tabHandleChange, selectedTab}) => {

  return (
    <div className="container">
      <ul className="nav nav-tabs">
        {tabsList.map(tab => (
          <li
            className="nav__item"
            key={tab.id}
          >
            <button
              className={classNames(`nav-link`,
                { active: selectedTab === tab.id })}
              type="button"
              onClick={() => tabHandleChange(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="content">
        {tabsList.find(tab => tab.id === selectedTab).content}
      </div>
    </div>
  );
}

Tabs.propTypes = propTypes;
