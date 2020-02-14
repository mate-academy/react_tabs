import React from 'react';
import PropTypes from 'prop-types';

export const TabsContent = ({ content }) => (
  <div className="tab-content">
    <div className="tab-pane active">
      <p>{content}</p>
    </div>
  </div>
);

TabsContent.propTypes = {
  content: PropTypes.string,
};

TabsContent.defaultProps = {
  content: '',
};
