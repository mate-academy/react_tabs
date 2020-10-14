import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

export const Tabs = props => (
  <>
    <div>
      {props.children}
    </div>

    <div className="text">
      {props.children.find(tab => tab.props.activeTab === tab.props.title)
        .props.children}
    </div>
  </>
);

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
