import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

const Tab = ({ title, click, isActive }) => {
  let classItem = 'nav-link';

  classItem += isActive ? ' active' : '';

  return (
    <li className="nav-item">
      <button type="button" onClick={click} className={classItem}>
        {title}
      </button>
    </li>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Tab;
