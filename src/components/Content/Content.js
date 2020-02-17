import React from 'react';
import PropTypes from 'prop-types';

export const Content = ({ text }) => (
  <p>{text.content}</p>
);

Content.propTypes = {
  text: PropTypes.shape({
    content: PropTypes.string,
  }).isRequired,
};
