import React from 'react';

import PropTypes from 'prop-types';

const Tab = ({ title }) => (
  <>
    {title}
  </>
);

export default Tab;

Tab.propTypes = {
  title: PropTypes.string.isRequired,
};
