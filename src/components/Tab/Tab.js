import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ title, onTabSelected }) => (
  <>
    <button
      className="tab-button"
      type="button"
      onClick={onTabSelected}
    >
      {title}
    </button>
  </>
);

Tab.propTypes = {
  onTabSelected: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
