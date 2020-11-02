import React from 'react';
import uuid from 'uuid-random';
import './Tabs.css';

import { TabsTypes } from './TabsTypes';

export const Tabs = ({
  indexTab,
  tabSelected,
  onTabSelected,
  children,
}) => (
  <>
    <div className="Tabs">
      {
        children.map((child, index) => (
          <div
            key={uuid()}
            className="tab-title"
          >
            <input
              type="radio"
              name={child.props.title}
              id={child.props.title}
              checked={child.props.title === tabSelected}
              onChange={(event) => {
                onTabSelected(event.target.name, index);
              }}
            />
            <label htmlFor={child.props.title}>
              {child.props.title}
            </label>
          </div>
        ))
      }
    </div>
    <div className="Tab">
      {children[indexTab]}
    </div>
  </>
);

Tabs.propTypes = TabsTypes;
