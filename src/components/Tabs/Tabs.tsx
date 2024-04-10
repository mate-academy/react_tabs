import { FC } from 'react';
import { Tab } from '../../types';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const selected = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleTabClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    tab: Tab,
  ) => {
    event.preventDefault();
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
              className={selected.id === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => handleTabClick(event, tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selected.content}
      </div>
    </div>
  );
};
