import React from 'react';
import PropTypes from 'prop-types';

const Tabs = props => (
  <div>
    <button type="button" onClick={props.onChangeText}>{props.title}</button>
  </div>
);

Tabs.propTypes = {
  tab: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default Tabs;
