import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tabs.scss';

interface Props {
  tabs: Tab[];
  selectedTab: Tab;
  // selectedTabId: string;
  onTabSelected: (index: string) => void;
}

export const Tabs: React.FC<Props> = (props: Props) => {
  const {
    tabs,
    selectedTab,
    // selectedTabId,
    onTabSelected,
  } = props;

  return (
    <>
      <ul className="Tabs">
        {tabs.map((tab) => (
          <li key={tab.id} className="Tabs__item">
            <button
              type="button"
              className="Tabs__tab btn btn-primary"
              onClick={() => onTabSelected(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <p className="Tabs__content">
        {selectedTab.content}
      </p>
    </>
  );
};
