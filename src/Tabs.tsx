import { FC } from 'react';
import classNames from 'classnames';

interface Props {
  tabs: Tab[],
  selectedTab: Tab,
  handleTabselected: (tab: Tab) => void,
}

export const Tabs: FC<Props> = ({ tabs, selectedTab, handleTabselected }) => {
  return (
    <ul className="nav nav-tabs mb-3">
      {tabs.map(tab => (
        <li key={tab.id} className="nav-item">
          <button
            className={classNames({
              'nav-link': true,
              active: tab.id === selectedTab.id,
            })}
            type="button"
            onClick={() => handleTabselected(tab)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  );
};
