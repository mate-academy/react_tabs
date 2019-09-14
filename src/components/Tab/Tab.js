import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

function Tab({ title, tabFunc, activeTab }) {
  const activeClass = (activeTab === title)
    ? 'tab tab--is-active'
    : 'tab';

  return (
    <button
      type="submit"
      onClick={() => tabFunc(title)}
      className={activeClass}
    >
      {title}
    </button>
  );
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  tabFunc: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Tab;
