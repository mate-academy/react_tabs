import React from 'react';

type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tab: Tab;
  onSet: (content: string, tabId: string) => void;
  selectCheck: string;
};

const Tabs: React.FC <Props> = ({ tab, onSet, selectCheck }) => {
  return (
    <li
      key={tab.id}
      className="list__item"
    >
      <button
        type="button"
        className={tab.content === selectCheck ? 'btn btn--checked' : 'btn'}
        onClick={() => {
          onSet(tab.content, tab.id);
        }}
      >
        {tab.title}
      </button>
    </li>
  );
};

export default Tabs;
