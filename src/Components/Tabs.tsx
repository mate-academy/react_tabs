import classNames from 'classnames';
import React from 'react';

type HandleTabChange = (tab: Tab) => void;

type Props = {
  tabs: Tab[];
  selectedTabId: string,
  content: string | null,
  onTabSelected: HandleTabChange;
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    tabs,
    content,
    selectedTabId,
    onTabSelected,
  } = props;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li key={tab.id} className={classNames({ 'is-active': selectedTabId === tab.id })}>
              <a
                href="#preventReload"
                onClick={() => {
                  onTabSelected(tab);
                }}
              >
                <span className="icon is-small"><i className="fas fa-image" aria-hidden="true" /></span>
                <span>{tab.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p>{content}</p>
    </>
  );
};
