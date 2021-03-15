import React from 'react';
import PropTypes from 'prop-types';

export const Content = ({ tab }) => {
  return (
    <div>
      {tab.content}
    </div>
  ) 
}

Content.propTypes = {
  tab: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};
