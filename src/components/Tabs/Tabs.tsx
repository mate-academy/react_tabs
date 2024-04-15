import React, { useState } from "react";

type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {

  const [selectedTabId, setSelectedTabId] = useState(tabs[0].title);
  const [content, setContent] = useState(tabs[0].content);

  const onTabSelected = (title: string, theContent: string) => {
    if (title !== selectedTabId) {
      setSelectedTabId(title);
      setContent(theContent);
    }

    if (!title) {
      setSelectedTabId(tabs[0].title);
    }
  };

  return (
    <div className="section">
    <h1 className="title">{`Selected tab is ${selectedTabId}`}</h1>

    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <li
            className={tab.title === selectedTabId ? "is-active" : ""}
            data-cy="Tab"
            key={`#${tab.id}`}
          >
            <a
              data-cy="TabLink"
              href={`#${tab.id}`}
              onClick={() => onTabSelected(tab.title, tab.content)}
            >
              {tab.title}
            </a>
          </li>
        ))}
    </ul>
        </div>
      </div>
        <div className="block" data-cy="TabContent" style={{marginTop: "20px"}}>
            {content}
        </div>
      </div>

  );
};
