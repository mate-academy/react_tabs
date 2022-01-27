import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  selectTabHandler: (tabId: string) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, selectTabHandler } = props;

  const tabToRender = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      {tabs.map(tab => (
        <button
          className={classNames('button', { 'button-active': tab.id === selectedTabId })}
          type="button"
          key={tab.id}
          onClick={() => selectTabHandler(tab.id)}
        >
          {tab.title}
        </button>
      ))}
      <p className="content">
        {tabToRender?.content}
      </p>
    </div>
  );
};
