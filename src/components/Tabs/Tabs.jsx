import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

export const Tabs = props => (
  <>
    <div className="tabs">
      {props.children}
    </div>

    <div className="content">
      {
        props.children
          .find(tab => tab.props.title === tab.props.activeTab).props.children
      }
    </div>
  </>
);

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
