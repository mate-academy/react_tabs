import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

export const Tab = (props) => {
  const { onTabSelected, index, tab, className } = props;

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          onTabSelected(index);
        }}
      >
        {tab.title}
      </button>
    </>
  );
};

Tab.propTypes = {
  onTabSelected: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  tab: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

Tab.defaultProps = {
  className: '',
};
