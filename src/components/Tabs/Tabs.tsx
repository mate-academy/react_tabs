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
      <div className="Tabs__tab">
        <button
          className={classNames('Tabs__button', { active: selectedTabId === tab.id })}
          type="submit"
          onClick={(event: { preventDefault: () => void; }) => {
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
