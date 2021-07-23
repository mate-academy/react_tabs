import React from 'react';
import PropTypes from 'prop-types';
import './Text.css';

export const Text = ({ text }) => (
  <p
    className="app__text"
  >
    {text}
  </p>
)

Text.propTypes = {
  text: PropTypes.string.isRequired,
}
