// implement a component here
import classNames from 'classnames';
import React, { useState } from 'react';
import './Tabs.scss';
import { Tab } from '../../react-app-env';

interface Props {
  tabs: Tab[];
  selectedTabId: (tabid: string) => void;
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const [content, setContent] = useState(tabs[0].content);

  const onTabSelected = (tabId: string) => {
    const tabContent = tabs.filter(tab => tab.id === tabId);

    setContent(tabContent[0].content);
  };

  return (
    <div className="tab__box m-6">
      <div className="tab__buttons-box is-flex-direction-column">
        {tabs.map((tab: Tab) => {
          return (
            <div
              key={tab.id}
              data-cy="tab-content"
              className={classNames(
                'tab__buttons',
                {
                  active: tab.content === content,
                },
              )}
            >
              <button
                type="button"
                className="has-text-info button is-white"
                onClick={() => {
                  selectedTabId(tab.id);
                  onTabSelected(tab.id);
                }}
              >
                {tab.title}
              </button>
            </div>
          );
        })}
      </div>
      <div className="tab__subtitle subtitle">{content}</div>
    </div>
  );
};
