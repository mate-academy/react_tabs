import React from 'react';

import { Tab } from '../types/Tab';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (obj: Tab) => void,
};

export class Tabs extends React.PureComponent<Props> {
  render() {
    const { onTabSelected, tabs, selectedTabId } = this.props;

    return (
      <div
        className="Tabs"
      >
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="Tabs__item"
          >
            <button
              type="submit"
              className={
                tab.id === selectedTabId
                  ? 'Tabs__button Tabs__button--active'
                  : 'Tabs__button'
              }
              onClick={() => {
                onTabSelected(tab);
              }}
            >
              {tab.title}
            </button>
            <span
              data-cy="tab-content"
              className={
                tab.id === selectedTabId
                  ? 'Tabs__content--active'
                  : 'Tabs__content'
              }
            >
              {selectedTabId === tab.id ? tab.content : null}
            </span>
          </li>
        ))}
      </div>
    );
  }
}
