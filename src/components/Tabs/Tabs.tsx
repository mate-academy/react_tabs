import React from 'react';

import classNames from 'classnames';

import './Tabs.scss';

type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  selectedTabId: number,
  allTabs: Tab[],
  chengeTab: (index: number) => void,
};

type State = {

};

export class Tabs extends React.Component<Props, State> {
  state = {

  };

  render() {
    const { selectedTabId, allTabs, chengeTab } = this.props;

    return (
      <div className="Tabs">
        {
          allTabs.map((tab, index) => (
            <button
              type="button"
              key={tab.id}
              className={classNames('Tabs__button', { 'Tabs__button--selected': index === selectedTabId })}
              onClick={() => (
                chengeTab(index)
              )}
            >
              {tab.title}
            </button>
          ))
        }
        <div className="Tabs__content">
          {allTabs.find(tab => tab.id === allTabs[selectedTabId].id)?.content}
        </div>
      </div>
    );
  }
}
