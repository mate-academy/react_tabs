import React from 'react';
import PropTypes from 'prop-types';

const Tabs = props => (
  <div className="tab__text">
    {props.text}
  </div>
);

Tabs.propTypes = { text: PropTypes.string.isRequired };

export default Tabs;
