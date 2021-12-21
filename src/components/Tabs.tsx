import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  tabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  tabId,
  onTabSelected,
}) => (
  <section className="tabs">
    {tabs.map(tab => (
      <div className="tabs__item" key={tab.id}>
        <button
          type="submit"
          className={classNames('tabs__button', { active: tabId === tab.id })}
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      </div>
    ))}
  </section>
);
