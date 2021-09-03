import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: any,
}

const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => (
  <div className="container">
    {tabs.map(({ title, id }) => (
      <button
        key={id}
        type="button"
        className={classNames({
          button: true,
          active: id === selectedTab.id,
        })}
        onClick={() => onTabSelected(id)}
      >
        {title}
      </button>
    ))}
    <h1 className="content">
      {selectedTab.content}
    </h1>
  </div>
);

export default Tabs;
