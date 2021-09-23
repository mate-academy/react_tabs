import React from 'react';
import './Tabs.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelect: (tab: Tab) => void;
};

export const Tabs:React.FC<Props> = (props) => {
  const handleTabChange = (tab:Tab) => {
    if (tab.id !== props.selectedTabId) {
      props.onTabSelect(tab);
    }
  };

  const tabs = [...props.tabs];
  const displayedTab:Tab = tabs.find(tab => tab.id === props.selectedTabId) || tabs[0];

  const { content } = displayedTab;

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              className={classNames('nav-link', {
                active: tab.id === props.selectedTabId,
              })}
              onClick={() => handleTabChange(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="Content">
        {content}
      </div>
    </>
  );
};
