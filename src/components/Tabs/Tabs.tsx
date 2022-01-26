import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export class Tabs extends React.Component<Props, {}> {
  findSelectedTab = (tabs: Tab[], selectedTabId: string) => {
    return tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  };

  render() {
    const { tabs, selectedTabId, onTabSelected } = this.props;

    return (
      <>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={classNames({ 'is-active': tab.id === selectedTabId })}
              >
                <a
                  href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    onTabSelected(tab);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="box">{this.findSelectedTab(tabs, selectedTabId).content}</p>
      </>
    );
  }
}
