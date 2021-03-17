import React from 'react';
import PropTypes from 'prop-types';
import './TabsContent.scss';

export const TabsContent = ({ tab }) => (
  <div className="content">
    {tab && tab.content}
  </div>
);

TabsContent.propTypes = {
  tab: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }),
};

TabsContent.defaultProps = {
  tab: null,
};
