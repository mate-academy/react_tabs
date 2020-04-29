import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ items, onTabSelected }) => (
  items.map((item, index) => (
    <>
      <button
        type="button"
        key={item.title}
        onClick={() => onTabSelected(index)}
      >
        {item.title}
      </button>
    </>
  ))
);

Tabs.propTypes = {
  onTabSelected: PropTypes.func.isRequired,
  items: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
  }).isRequired,

};
export default Tabs;
