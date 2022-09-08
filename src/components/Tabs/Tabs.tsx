import React from 'react';
import classNames from 'classnames';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  setSelectedTab: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  setSelectedTab,
}) => {
  const selectedPage = tabs.find(tab => tab.id === selectedTab.id) || tabs[0];

  const handleClick = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      setSelectedTab(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map((tab) => (
              <li
                data-cy="Tab"
                key={tab.id}
                className={
                  classNames(
                    {
                      'is-active': tab.id === selectedPage.id,
                    },
                  )
                }
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))
          }

        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedPage.content}
      </div>
    </div>
  );
};
