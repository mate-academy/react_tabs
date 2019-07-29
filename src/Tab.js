import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ tab, activeId, handleClick }) => (
  <li className={(tab.id === activeId) && 'active-tab'}>
    <a
      href={`#${tab.title}`}
      onClick={() => handleClick(tab.id)}
      className={(tab.id === activeId) && 'active-link'}
    >
      {tab.title}
    </a>
  </li>
);

Tab.propTypes = {
  tab: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  activeId: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
};

Tab.defaultProps = {
  handleClick: null,
};

export default Tab;
