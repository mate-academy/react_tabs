import React from 'react';

interface ITabs {
  tabs: Tab[],
  select: string,
  changer: (tab: Tab) => void,
}

export const Tabs: React.FC<ITabs> = ({ tabs, changer, select }) => {
  return (
    <ul className="list">
      {tabs.map((tab: Tab) => {
        const clicker = () => {
          if (select !== tab.id) {
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
            {select === tab.id && <p className="content">{tab.content}</p>}
          </li>
        );
      })}
    </ul>
  );
};
