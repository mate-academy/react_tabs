import React from 'react';
import classNames from 'classnames';
// eslint-disable-next-line import/no-cycle
import { findTabByID } from './App';

interface Props {
  tabs: Tab[],
  selector: (id: string) => void,
  selectedTabId: string,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selector,
  selectedTabId,
}) => {
  const selectedTab = findTabByID(selectedTabId) || tabs[0];

  return (
    <section className="box">
      <div
        className="
          buttons
          is-flex
          is-flex-direction-row"
      >
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={classNames('button', {
              'is-outlined': tab.id !== selectedTabId,
              'is-link': tab.id === selectedTabId,
            })}
            type="button"
            onClick={() => {
              if (selectedTabId !== tab.id) {
                selector(tab.id);
              }
            }}
          >
            {tab.title}
          </button>
        ))}
        <progress
          className="
            progress
            is-link
            is-small"
          value="1"
          max="1"
        />
      </div>
      <p
        className="subtitle is-3"
        data-cy="tab-content"
      >
        {selectedTab.content}
      </p>
    </section>
  );
};
