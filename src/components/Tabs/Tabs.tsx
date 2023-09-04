/* eslint-disable no-console */
import { useEffect } from 'react';
import { Tab } from '../../types/tab';

type Props = {
  tabs: Array<Tab>,
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs = ({
  tabs, selectedTab, onTabSelected,
}: Props) => {
  useEffect(() => {
    if (!tabs.some(t => t === selectedTab)) {
      onTabSelected(tabs[0]);
    }
  });

  const onClickHandler = (event: React.MouseEvent, tab: Tab) => {
    event.preventDefault();
    if (tab !== selectedTab) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => (
              <li
                key={tab.id}
                className={tab === selectedTab
                  ? 'is-active'
                  : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={(event) => onClickHandler(event, tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>

  );
};
