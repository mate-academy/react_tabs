import React from 'react';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export class Tabs extends React.Component<Props, {}> {
  state = {};

  render() {
    const { tabs, selectedTabId, onTabSelected } = this.props;

    return (
      <div className="tabs">
        <div className="tabs__header">
          {tabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              className={classNames('tabs__btn', { 'tabs__btn--active': tab.id === selectedTabId })}
              onClick={() => {
                onTabSelected(tab);
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div
          className="tabs__content"
        >
          {tabs.find(tab => tab.id === selectedTabId)?.content}
        </div>
      </div>
    );
  }
}
