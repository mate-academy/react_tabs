import React from 'react';
import './Content.css';
import PropTypes from 'prop-types';

export const Content = ({ text }) => (
  <div className="tabs__content">{text.content}</div>
);

Content.propTypes = {
  text: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
