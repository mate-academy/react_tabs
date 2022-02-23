import React from 'react';

interface ITabs {
  tabs: Tab[],
  selectedTab: Tab,
  changer: (tab: Tab) => void,
}

export const Tabs: React.FC<ITabs> = ({ tabs, changer, selectedTab }) => {
  return (
    <ul className="list">
      {tabs.map((tab: Tab) => {
        const clicker = () => {
          if (selectedTab.id !== tab.id) {
            return changer(tab);
          }

          return null;
        };

        return (
          <li className="list__item">
            <button
              className="waves-effect waves-light btn-small"
              type="button"
              onClick={clicker}
            >
              {tab.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
