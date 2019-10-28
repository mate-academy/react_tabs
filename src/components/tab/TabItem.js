import React from 'react';
import PropTypes from 'prop-types';

const TabItem = ({
  handleClick,
  title,
  activeItem,
  index,
}) => (

  <button
    className={
      activeItem === index
        ? 'active item'
        : 'item'
    }
    type="button"
    onClick={handleClick}
  >
    {title}
  </button>
);

TabItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  activeItem: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default TabItem;
