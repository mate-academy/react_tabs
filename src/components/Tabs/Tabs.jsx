import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';
import classNames from 'classnames';

export function Tabs({ tabs, index, onTabSelected }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {tabs.map((tab, i) => (
              <th
                className={classNames('table-element', {
                  active: i === index,
                })}
                key={tab.title}
                onClick={() => onTabSelected(i)}
              >
                {tab.title}
              </th>
            ))}
          </tr>
        </thead>
      </table>
    </>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
  index: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
