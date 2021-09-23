import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import classNames from 'classnames';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (changedTab: Tab) => void;
}

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;

  return (
    <section>
      <ul className="nav nav-tabs justify-content-center">
        {tabs.map((tab) => (
          <li
            className="nav-item"
            key={tab.id}
          >
            <a
              className={classNames('nav-link', {
                active: tab.id === selectedTabId,
              })}
              href={selectedTabId}
              onClick={(event) => {
                event.preventDefault();
                if (selectedTabId !== tab.id) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <p
        className="text-center"
      >
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </p>
    </section>
  );
};
