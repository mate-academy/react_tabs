import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Tabs.css';

export const Tabs = ({ tabs, onSelected, index }) => (
  <>
    <ul className="tabs">
      {tabs.map((tab, tabIndx) => (
        <li key={tab.title}>
          <a
            onClick={event => onSelected(event, tabIndx)}
            className={classnames({
              'tab-link': true,
              selected: tabIndx === index,
            })}
            href="./"
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>

    <p className="tab-text">
      {tabs[index].content}
    </p>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  onSelected: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
