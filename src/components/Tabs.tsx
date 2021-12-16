import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  tabId: string;
  onTabSelected: (tab: Tab) => void,
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
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            onTabSelected(tab);
          }}
        >
          {tab.title}
        </button>
      </div>
    ))}
  </section>
);
