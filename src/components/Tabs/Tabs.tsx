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
      <ul className="pagination">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="page-item"
          >
            <a
              href={tab.content}
              className="page-link"
              onClick={(event) => {
                event.preventDefault();
                if (selectedTabId !== tab.id) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <p className="page-item">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </p>
    </>
  );
};
