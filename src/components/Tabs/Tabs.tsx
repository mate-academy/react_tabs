import classNames from 'classnames';
import React from 'react';
import { Tab } from '../../Type';

type Props = {
  tabs: Tab[],
  hendlerTabs: (tab: Tab) => void,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = ({ tabs, hendlerTabs, selectedTabId }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          className={classNames({ 'is-active': tab.id === selectedTabId })}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href="#{tab.id}"
            data-cy="TabLink"
            onClick={() => hendlerTabs(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
