import React from 'react';
import PropTypes from 'prop-types';

function Tab1({ content }) {
  return (
    <div className="ui bottom attached segment active tab">{content}</div>
  );
}

Tab1.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Tab1;
