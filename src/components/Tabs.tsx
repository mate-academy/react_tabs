import React from 'react';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (chosenTab: Tab) => void;
}

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li key={tab.id}>
            <a
              href={tab.id}
              onClick={(event) => {
                event.preventDefault();
                onTabSelected(tab);
              }}
              className={classNames(
                'nav-link',
                {
                  active: tab.id === selectedTabId,
                },
              )}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <p className="fs-3 text-justify">
        {tabs.find((tab) => selectedTabId === tab.id)?.content}
      </p>
    </>
  );
};
