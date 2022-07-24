import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTab: string,
  handleSelectedTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  handleSelectedTab,
}) => {
  const handlerOnTab = (tab: Tab) => {
    handleSelectedTab(tab);
  };

  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={classNames({
            'is-active': tab.id === selectedTab,
          })}
        >
          <a
            href={`#${selectedTab}`}
            onClick={() => handlerOnTab(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
