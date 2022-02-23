import React from 'react';
import { Tab } from '../types/Tab';

import './Tabs.css';

type Props = {
  tabs: Tab[],
  oneSelectTab: (tab: Tab) => void,
  selectTabId: string,
};

export class Tabs extends React.Component<Props, {}> {
  state = {};

  render() {
    const { tabs, oneSelectTab, selectTabId } = this.props;

    return (
      <div>
        <div className="tab__title">
          {tabs.map(tab => (
            <button
              type="button"
              key={tab.id}
              onClick={() => {
                oneSelectTab(tab);
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tab__content">
          {tabs.find(tab => tab.id === selectTabId)?.content}
        </div>
      </div>
    );
  }
}
