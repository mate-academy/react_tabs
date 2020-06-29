import React from 'react';
import PropTypes from 'prop-types';

export const Data = ({ data }) => <p>{data}</p>;

Data.propTypes = {
  data: PropTypes.string.isRequired,
};
