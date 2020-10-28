import React from 'react';
import { TabShape } from './shapes/TabShape';

export const TabsBody = ({ tab }) => (
  <div className="card-body">
    <div className="card-text lead">
      {tab.content}
    </div>
  </div>
);

TabsBody.propTypes = TabShape;
