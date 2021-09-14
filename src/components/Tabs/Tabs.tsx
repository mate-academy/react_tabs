import classNames from 'classnames';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: (userTab: Tab) => void;
}

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTab, onTabSelected } = props;

  return (
    <>
      <ul
        className="nav nav-tabs"
        id="myTab"
        role="tablist"
      >
        {tabs.map((tab) => (
          <li
            className="nav-item"
            key={tab.id}
          >
            <a
              className={classNames(
                'Tab nav-link',
                { active: tab.id === selectedTab.id },
              )}
              aria-current="page"
              href={tab.id}
              onClick={(event) => {
                event.preventDefault();
                onTabSelected(tab);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <p>
        {selectedTab.content}
      </p>
    </>
  );
};
