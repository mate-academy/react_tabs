import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';
import './Tab.scss';

type Props = {
  tabs: Tab[],
  selectedTab: number,
  changeTab: any,
};

export class Tabs extends React.Component<Props, {}> {
  state = {

  };

  render() {
    const { tabs, selectedTab, changeTab } = this.props;

    return (
      <div className="tab">
        <div className="tab__buttons">
          {tabs.map(tab => (
            <button
              type="button"
              className={classNames('tab__button', {
                'tab__button--active': tabs[selectedTab - 1].id === tab.id,
              })}
              key={tab.id}
              onClick={() => {
                changeTab(tab.id);
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <p>{tabs[selectedTab - 1].content}</p>
      </div>
    );
  }
}
