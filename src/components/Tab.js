import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ title }) => (
  <div>
    {title}
  </div>
);

Tab.defaultProps = {
  title: 'some text',
};

Tab.propTypes = {
  title: PropTypes.string,
};
