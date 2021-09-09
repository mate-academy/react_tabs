import React from 'react';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (index: string) => void;
}

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              onClick={() => onTabSelected(tab.id)}
              className={classNames(
                'nav-link',
                {
                  active: tab.id === selectedTabId,
                },
              )}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <p className="fs-3 text-justify">
        {tabs.find((tab) => selectedTabId === tab.id)?.content}
      </p>
    </>
  );
};
