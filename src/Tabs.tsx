import { FC } from 'react';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}
export const Tabs: FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <div>
    {tabs.map(tab => (
      <li>
        <button
          type="button"
          key={tab.id}
          onClick={() => {
            if (selectedTabId !== tab.id) {
              onTabSelected(tab);
            }
          }}
        >
          {tab.title}
        </button>
      </li>
    ))}
    <div
      data-cy="tab-content"
    >
      <p>{tabs.find(tab => selectedTabId === tab.id)?.content}</p>
    </div>

  </div>
);
