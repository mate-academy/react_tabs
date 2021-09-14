import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: (value: string) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTab, onTabSelected } = props;

  return (
    <div>
      <ul className="nav nav-tabs d-flex justify-content-center">
        {tabs.map(tab => (
          <li key={tab.id}>
            <a
              className={classNames({
                'nav-link': true,
                active: tab.id === selectedTab.id,
              })}
              href={tab.id}
              onClick={(event) => {
                event.preventDefault();
                onTabSelected(tab.id);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <p className="nav nav-tabs d-flex justify-content-center vh-100">
        {selectedTab.content}
      </p>
    </div>
  );
};
