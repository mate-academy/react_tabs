import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ content, activeTab }) => (
  <h1 className="ui huge header">
    {content[activeTab].content}
  </h1>
);

Content.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
  })).isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default Content;
