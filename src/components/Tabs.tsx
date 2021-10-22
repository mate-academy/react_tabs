import { FC } from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId)
    || tabs[0];

  return (
    <div>
      <ul>
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              onClick={() => (tab !== selectedTab
                ? onTabSelected(tab)
                : null
              )}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p>
        {selectedTab.content}
      </p>
    </div>
  );
};
