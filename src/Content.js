import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ currentTab }) => (
  <section className="content">
    {currentTab.content}
  </section>
);

Content.propTypes = {
  currentTab: PropTypes
    .oneOfType([PropTypes.object]).isRequired,
};

export default Content;
