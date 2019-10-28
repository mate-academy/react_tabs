import React from 'react';
import PropTypes from 'prop-types';

function Tab3({ content }) {
  return (
    <div className="ui bottom attached segment active tab">{content}</div>
  );
}

Tab3.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Tab3;
