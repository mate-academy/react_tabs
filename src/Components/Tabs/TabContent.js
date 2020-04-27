import React from 'react';
import PropTypes from 'prop-types';

const TabContent = ({ content }) => (
  <article className="tabs__content">
    {content}
  </article>
);

TabContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default TabContent;
