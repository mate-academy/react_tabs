import classNames from 'classnames';
import React from 'react';
// import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  // tabs: Array<{}>,
  selectedTab: {
    id: string;
    title: string;
    content: string;
  },
  setselectedTab: React.Dispatch<React.SetStateAction<{
    id: string; title: string; content: string; }>>
};

export const Tabs: React.FC<Props> = (
  {
    tabs, selectedTab, setselectedTab,
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
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  setselectedTab(tab);
                  console.log(tab);
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
