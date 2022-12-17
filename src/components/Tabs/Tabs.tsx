import React from 'react';
import classNames from 'classnames';

type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: Tab[];
  selectedTabs: {
    id: string;
    title: string;
    content: string;
  };
  setTabs: (tab: Tab) => void
};

export const Tabs: React.FC<Props> = (
  {
    tabs, selectedTabs, setTabs,
  },
) => {
  const handleClick = (tab: Tab) => {
    if (selectedTabs.id === tab.id) {
      return;
    }

    setTabs(tab);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames(
                { 'is-active': tab.id === selectedTabs.id },
              )}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
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
