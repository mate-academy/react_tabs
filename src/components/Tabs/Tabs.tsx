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

  handleTabSelected = (
    event: React.MouseEvent<HTMLAnchorElement>,
    selectedTabId: string,
    tab: Tab,
  ) => {
    event.preventDefault();

    if (selectedTabId !== tab.id) {
      this.props.onTabSelected(tab);
    }
  };

  render() {
    const { tabs, selectedTabId } = this.props;

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
                  onClick={(event) => this.handleTabSelected(event, selectedTabId, tab)}
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
