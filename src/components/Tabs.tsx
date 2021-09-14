import classNames from 'classnames';
import React from 'react';
import './Tabs.scss';

interface Props {
  selectedTab: Tab
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = (props) => {
  const { selectedTab, tabs, onTabSelected } = props;

  return (
    <div className="Tabs">
      <ul className="Tabs__list">
        {tabs.map(tab => (
          <li key={tab.id} className="Tabs__items">
            <button
              type="submit"
              onClick={() => onTabSelected(tab)}
              className={classNames(
                'Tabs__link',
                {
                  active: selectedTab.id === tab.id,
                },
              )}
            >
              <div className="Tabs__title">
                {tab.title}
              </div>
            </button>
          </li>
        ))}
      </ul>
      <p className="Tabs__choose">{selectedTab.content}</p>
    </div>
  );
};
