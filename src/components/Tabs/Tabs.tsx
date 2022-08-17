import { FC } from 'react';

import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const { id: currentId, content } = currentTab;

  const handleSelect = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                className={classNames({ 'is-active': currentId === id })}
              >
                <a
                  href={`#${id}`}
                  onClick={() => handleSelect(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {content}
      </div>
    </div>
  );
};
