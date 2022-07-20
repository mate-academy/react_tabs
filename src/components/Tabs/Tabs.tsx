import classNames from 'classnames';
import { FC } from 'react';
import Tab from '../../types/Tab';

interface Props {
  tabs: Tab[],
  chengeTab: (tab: Tab) => void
  choosedTab: Tab
}

export const Tabs: FC<Props> = ({ tabs, chengeTab, choosedTab }) => (
  <div className="tabs">
    <ul className="tabs__list">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={classNames(tab.id === choosedTab.id ? 'is-active' : '')}
        >
          <a
            href={`#${tab.id}`}
            onClick={() => chengeTab(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>

    <div className="block" data-cy="tab-content">
      {choosedTab.content}
    </div>

  </div>
);
