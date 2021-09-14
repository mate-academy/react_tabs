import React from 'react';
import classNames from 'classnames';

interface Props {
  tabs: Tab[],
  activeTab: Tab,
  changeTab: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = (props) => {
  const { activeTab, tabs, changeTab } = props;

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li className="nav-item" key={tab.id}>
            <a
              className={classNames({
                'nav-link': true,
                active: tab.id === activeTab.id,
              })}
              href={tab.id}
              onClick={(event) => {
                event.preventDefault();
                changeTab(tab);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div>
        {activeTab.content}
      </div>
    </>
  );
};
