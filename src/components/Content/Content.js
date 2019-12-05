import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ tabs, index }) => (
  <div>
    <div>{tabs[index].content}</div>
  </div>
);

Content.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string)
  ).isRequired,
  index: PropTypes.number.isRequired,
};

export default Content;
