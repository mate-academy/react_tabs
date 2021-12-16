import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  onContent: (tabId:string) => void
  selectedId: string | undefined
};

export const Tabs: React.FC<Props> = ({ tabs, onContent, selectedId }) => {
  const findSelectedTab = tabs.find(tab => tab.id === selectedId);

  return (
    <>
      <ul className="tab">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className="tab__element"
          >
            <button
              className={classNames({
                tab__item: findSelectedTab?.id === tab.id,
              })}
              type="submit"
              onClick={() => onContent(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p
        className="content"
      >
        {findSelectedTab?.content}
      </p>
    </>
  );
};
