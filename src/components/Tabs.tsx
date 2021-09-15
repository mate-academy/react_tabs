import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (anotherTab: Tab) => void,
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;

  return (
    <>
      <ul className="nav justify-content-center nav-tabs">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="nav-item"
          >
            <a
              className="nav-link active"
              href={selectedTabId}
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
      <p className="text-center">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </p>
    </>
  );
};
