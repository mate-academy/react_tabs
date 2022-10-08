import classNames from 'classnames';
import React from 'react';

interface Tab {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: Tab[],
  selectedTab: {
    id: string;
    title: string;
    content: string;
  },
<<<<<<< HEAD
  setSelectedTab: React.Dispatch<React.SetStateAction<{
=======
  setselectedTab: React.Dispatch<React.SetStateAction<{
>>>>>>> 25163d1aef2584aa56b7e23996e6a278586af816
    id: string; title: string; content: string; }>>
};

export const Tabs: React.FC<Props> = (
  {
<<<<<<< HEAD
    tabs, selectedTab, setSelectedTab,
=======
    tabs, selectedTab, setselectedTab,
>>>>>>> 25163d1aef2584aa56b7e23996e6a278586af816
  },
) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">

        <ul>
          {tabs.map(tab => (
            <li
              className={classNames(
                {
                  'is-active': tab.id === selectedTab.id,
                },
              )}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
<<<<<<< HEAD
                  setSelectedTab(tab);
=======
                  setselectedTab(tab);
>>>>>>> 25163d1aef2584aa56b7e23996e6a278586af816
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};
