import React from 'react';
import classNames from 'classnames';
import 'bootstrap/scss/bootstrap.scss';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  changeTab: (tab: Tab) => void,
};

const Tabs: React.FC<Props> = ({ tabs, selectedTab, changeTab }) => (
  <nav>
    <ul className="nav nav-tabs justify-content-center">
      {tabs.map(tab => (
        <li key={tab.id} className="nav-item">
          <a
            href={tab.id}
            className={classNames('nav-link', {
              active: tab.id === selectedTab.id,
            })}
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

    <p className="text-center" data-cy="tab-content">
      {selectedTab.content}
    </p>
  </nav>
);

export default Tabs;
