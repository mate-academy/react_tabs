import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <section className="Tabs">
    {tabs.map(tab => (
      <button
        key={tab.id}
        className={classNames('Tabs__button', { active: selectedTabId === tab.id })}
        type="button"
        onClick={() => {
          if (tab.id !== selectedTabId) {
            onTabSelected(tab);
          }
        }}
      >
        {tab.title}
      </button>
    ))}
  </section>
);
