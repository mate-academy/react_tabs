import React from 'react';
import PropTypes from 'prop-types';
import './TabsContent.scss';

export const TabsContent = ({ tabs, selectedId }) => {
  const currentTab = tabs.find(tab => tab.id === selectedId);

  return (
    <div className="content">
      {selectedId && currentTab.content}
    </div>
  );
};

TabsContent.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedId: PropTypes.string.isRequired,
};
