import React from 'react';
import PropTypes from 'prop-types';
import './TabsContent.scss';

export const TabsContent = ({ tabs, selectedTabId }) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="content">
      {selectedTabId && currentTab.content}
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
  selectedTabId: PropTypes.string.isRequired,
};
