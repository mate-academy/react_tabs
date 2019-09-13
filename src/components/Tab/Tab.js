import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({
  className, onTabSelected, index, tab, activeClass,
}) => (
  <div
    className={`${className} ${activeClass}`.trim()}
    onClick={() => onTabSelected(index)}
  >
    {tab.title}
  </div>
);

const shape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tab.propTypes = {
  className: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  activeClass: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  tab: shape.isRequired,
};

export default Tab;
