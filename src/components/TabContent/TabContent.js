import React from 'react';
import PropTypes from 'prop-types';

export const TabContent = ({ state, tabs }) => (
  <p>{tabs[state].content}</p>
);

export const TabContentProps = {
  state: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
  })).isRequired,
};

TabContent.propTypes = TabContentProps;
