import { FC } from 'react';
import { TabType } from '../../types/TabType';
import { TabsProps } from '../../types/TabsProps';

export const Tabs: FC<TabsProps> = ({
  tabs, selectedTabId, onTabSelected,
}) => {
  const findSelectedTab: (id: string) => TabType = (id: string) => {
    const foundTab = tabs.find((tab) => tab.id === id);

    if (foundTab) {
      return foundTab;
    }

    const [firstTab] = tabs;

    onTabSelected(firstTab);

    return firstTab;
  };

  const selectedTab = findSelectedTab(selectedTabId);

  const handleClick = (tab: TabType) => () => {
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <>
      <h1 className="title">
        {selectedTab
          ? `Selected tab is ${selectedTab.title}`
          : 'Tab not selected'}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <li
                className={selectedTab.id === tab.id ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={handleClick(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    </>
  );
};
