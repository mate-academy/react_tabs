import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

const Tab = ({ title, click, id, active }) => (
  <>
    <li className="tab__item">
      <a
        href="http://#"
        className={active === id ? 'blue' : ''}
        onClick={(e) => {
          e.preventDefault();

          return (
            click(id)
          );
        }}
      >
        {title}
      </a>
    </li>
  </>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
};

export default Tab;
