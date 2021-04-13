import React from 'react';

import './Tabs.scss';

import PropTypes from 'prop-types';

import { propTypes } from '../../types';
import classNames from 'classnames';

export class Tabs extends React.Component {

  render() {
    const tabsList = this.props.tabsList;
    const tabHandleChange = this.props.tabHandleChange;
    const selectedTab = this.props.selectedTab;

    return (
      <div className="container">
        <ul className="nav nav-tabs">
          {tabsList.map(tab => (
            <React.Fragment key={tab.id}>
              <li className="nav__item">
                <button
                  className={classNames(`nav-link`,
                  { active: selectedTab === tab.id })}
                  type="button"
                  onClick={() => tabHandleChange(tab)}
                >
                  {tab.title}
                </button>
              </li>
            </React.Fragment>
          ))}
        </ul>
        <div className="content">
          {tabsList.find(tab => tab.id === selectedTab).content}
        </div>
      </div>
    )
  }
}

Tabs.propTypes = propTypes;
