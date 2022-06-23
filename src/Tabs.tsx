import { FC, useState } from 'react';

interface TabsProps {
  tabs: Tab[],
}

export const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState('tab-1');
  const [selectedContent, setSelectedContent] = useState('Some text 1');

  return (
    <>
      <h1 className="title is-1">
        Selected tab is&nbsp;
        {selectedTab}
      </h1>
      <div className="tabs is-centered is-toggle is-large App__Tab">
        <ul>
          {tabs.map(tab => (
            <li
              className="is-active"
              key={tab.id}
            >
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  setSelectedTab(tab.id);
                  setSelectedContent(tab.content);
                }}
              >
                <span>{tab.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <section className="App__Content">
        <p data-cy="tab-content">{selectedContent}</p>
      </section>
    </>
  );
};
