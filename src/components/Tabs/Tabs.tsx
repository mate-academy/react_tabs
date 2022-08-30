import React, { Dispatch, SetStateAction } from 'react';

interface TabInterface {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: TabInterface[],
  tabId: string,
  setTabId: Dispatch<SetStateAction<string>>,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  tabId,
  setTabId,
}) => {
  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tabId === tab.id ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => setTabId(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {tabs.find(tabText => tabId === tabText.id)?.content}
      </div>
    </>
  );
};
