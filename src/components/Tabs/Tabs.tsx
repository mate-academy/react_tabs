import classNames from 'classnames';
import { FC } from 'react';
import { Tab } from './Tab';

type Props = {
  tabs: Tab[],
  onActiveTab: (tab: Tab) => void,
  activeTab: Tab,
};

export const Tabs: FC<Props> = (props) => {
  const { tabs, onActiveTab, activeTab } = props;

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={
                classNames(activeTab.id === tab.id ? 'is-active' : null)
              }
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => onActiveTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {activeTab.content}
      </div>
    </div>
  );
};
