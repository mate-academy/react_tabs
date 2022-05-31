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
    <div className="Tab">
      <ul className="Tab__list">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              className="Tab__button"
              onClick={() => {
                if (tab !== selectedTab) {
                  onTabSelected(tab)
                }
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p className="Tab__content">
        {selectedTab.content}
      </p>
    </div>
  );
};
