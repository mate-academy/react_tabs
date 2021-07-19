import React from 'react';
import { TabContentType } from '../../types';
import './TabsContent.css';

export const TabsContent = ({ content }) => (
  <p className="tabs__content">
    {content}
  </p>
);

TabsContent.propTypes = {
  content: TabContentType.isRequired,
};
