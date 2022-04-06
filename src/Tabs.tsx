import { FC } from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <div className="Tab">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onTabSelected(tab)}
          className={classNames('Tab-btn',
            { active: selectedTabId === tab.id })}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};
