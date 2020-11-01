import React from 'react';
import PropTypes from 'prop-types';
import { TabShape } from './shapes/TabShape';

export const TabsBody = ({ tab }) => (
  <div className="card-body">
    <div className="card-text lead">
      {tab.content}
    </div>
  </div>
);

TabsBody.propTypes = PropTypes.shape(TabShape).isRequired;
