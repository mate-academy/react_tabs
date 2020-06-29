import React from 'react';
import PropTypes from 'prop-types';

export const Date = ({ date }) => <p>{date}</p>;

Date.propTypes = {
  date: PropTypes.string.isRequired,
};
