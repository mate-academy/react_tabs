import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Tabs.scss';

export class Tabs extends React.Component {
  render() {
    const { tabs, id, onTabSelected } = this.props;
    return (
      <>
        <ul className="list">
          {tabs.map(tab => (
            <li key={tab.id} className="item">
              <span
                className={classNames('item_title', {
                  active: tab.id === id,
                })}
                onClick={() => onTabSelected(tab)}
              >
                {tab.title}
              </span>
            </li>
          ))}
        </ul>

        <p className="content">
          {tabs.find(tab => id === tab.id).content}
        </p>
      </>
    );
  };
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  id: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
}
