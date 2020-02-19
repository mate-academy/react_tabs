import React from 'react';
import PropTypes from 'prop-types';
import './Content.css';

const Content = ({ currentTab }) => (
  <div className="content">
    {currentTab.content}
  </div>
);

Content.propTypes = {
  currentTab: PropTypes.shape({
    content: PropTypes.string,
  }).isRequired,
};

export default Content;
