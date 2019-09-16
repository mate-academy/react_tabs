import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';
import classNames from 'classnames';

const Tab = ({ title, status, clickTab }) => {
  const clasess = classNames({
    'tab tab-not-active': true,
    'tab-active': status === title,
  });

  return (
    <button
      type="button"
      className={clasess}
      onClick={() => clickTab(title)}
    >
      {title}
    </button>
  );
};

Tab.propTypes = ({
  title: PropTypes.string,
  status: PropTypes.string,
  clickTab: PropTypes.func,
}).isRequired;

export default Tab;
