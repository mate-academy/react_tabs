import React from 'react';
import PropTypes from 'prop-types';
import './Content.css';

export const Content = ({ tab }) => (
  <div className="tab__content">
    {tab.content}
  </div>
);

Content.propTypes = {
  tab: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};
