import React from 'react';
import './Tabs.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';

type Props = {
  tabs:Tab[]
  selectedTabId:string
  onTabSelect:(tabId:Tab) => void
};

export const Tabs:React.FC<Props> = (props) => {
  const handleTabChange = (event:React.MouseEvent<HTMLButtonElement>, tab:Tab) => {
    event.preventDefault();

    if (tab.id !== props.selectedTabId) {
      props.onTabSelect(tab);
    }
  };

  const tabs = [...props.tabs];
  let content:Tab | string = tabs.find(tab => tab.id === props.selectedTabId) || tabs[0];

  content = content.content;

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
              onClick={
                (event) => {
                  handleTabChange(event, tab);
                }
              }
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
