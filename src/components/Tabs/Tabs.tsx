import React from 'react';

interface Tab {
  id: string;
  title: string;
  content: string;
  index: number;
}

type Props = {
  preparedTabs: Tab[];
  selectedTabID: number;
  setTabID: (index : number) => void;
};

export const Tabs: React.FC<Props> = ({
  preparedTabs,
  selectedTabID,
  setTabID,
}) => {
  const actualContent: string = preparedTabs[selectedTabID].content;

  const clickHandler = (tab: Tab) => {
    setTabID(tab.index);
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {preparedTabs.map(tab => (
            <li
              className=""
              key={tab.id}
            >
              <button
                type="button"
                onClick={() => clickHandler(tab)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {actualContent}
      </div>
    </div>
  );
};
