import React from 'react';
import PropTypes from 'prop-types';

function Tab({ activeTab, label, onClick }) {
  let className = 'tab-list-item';

  if (activeTab === label) {
    className += ' tab-list-active';
  }

  return (
    <li
      key={label}
      className={className}
      onClick={() => onClick(label)}
      role="presentation"
    >
      {label}
    </li>
  );
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
