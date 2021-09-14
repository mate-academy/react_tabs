import React from 'react';

interface Props {
  tabs: Tab[];
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void
}
export const Tabs: React.FC<Props> = (props) => {
  const { tabs, onTabSelected, selectedTabId } = props;

  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
          >
            <a
              href={tab.content}
              onClick={(event) => {
                event.preventDefault();
                if (selectedTabId !== tab.id) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </a>

            {selectedTabId === tab.id && (
              ` - ${tab.content}`
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
