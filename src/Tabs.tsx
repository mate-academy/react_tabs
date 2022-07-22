import { FC } from 'react';
import classNames from 'classnames';

interface Props {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: FC<Props> = ({ tabs, onTabSelected, selectedTab }) => {
  return (
    <>
      {tabs.map(tab => (
        <button
          className={classNames('btn', {
            active: selectedTab.id === tab.id,
          })}
          key={tab.id}
          type="button"
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      ))}
      <p
        className="content"
        data-cy="tab-content"
      >
        {selectedTab.content}
      </p>
    </>
  );
};
