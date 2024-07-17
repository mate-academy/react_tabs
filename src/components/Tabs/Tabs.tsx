import { FC } from 'react';
import { Tab } from '../../types/tab';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (clicked: Tab) => void;
};

export const Tabs: FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const selected = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleClick = (tab: Tab) => {
    if (selected.id !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': selected?.id === tab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selected?.content}
      </div>
    </div>
  );
};
