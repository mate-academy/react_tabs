import React from 'react';
import PropTypes from 'prop-types';

function Tab2({ content }) {
  return (
    <div className="ui bottom attached segment active tab">{content}</div>
  );
}

Tab2.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Tab2;
