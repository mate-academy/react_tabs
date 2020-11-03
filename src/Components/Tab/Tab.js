import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ tabTitle }) => (
  <>{tabTitle}</>
);

Tab.propTypes = PropTypes.string.isRequired;
