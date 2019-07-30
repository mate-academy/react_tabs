import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, selectedId, onTabSelected }) => (
  <li className={classnames({
    dropdown: true,
    active: tabs.id === selectedId,
  })}
  >
    {/* eslint-disable-next-line */}
    <a
      className="dropdown-toggle"
      href="#"
      onClick={() => onTabSelected(tabs.id)}
    >
      {tabs.title}
    </a>
  </li>
);

Tabs.propTypes = {
  tabs: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  selectedId: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default Tabs;
