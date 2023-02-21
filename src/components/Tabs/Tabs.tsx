/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export class Tabs extends React.Component<Props, {}> {
  render() {
    const { tabs, selectedTabId, onTabSelected } = this.props;

    let selectedTab = tabs.find(
      (tab: Tab) => tab.id === selectedTabId,
    );

    if (!selectedTab) {
      // eslint-disable-next-line prefer-destructuring
      selectedTab = tabs[0];
    }

    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab: Tab) => {
              const tabHref = `#${tab.id}`;
              const active = tab === selectedTab;

              return (
                <>

                  <li
                    className={
                      classNames({ 'is-active': active })
                    }
                    data-cy="Tab"
                  >
                    <a
                      href={tabHref}
                      data-cy="TabLink"
                      onClick={active ? undefined : () => onTabSelected(tab)}
                    >
                      {tab.title}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    );
  }
}
