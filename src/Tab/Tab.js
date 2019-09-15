import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => <div className="tab-pane">{props.children}</div>;

Tab.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tab;
