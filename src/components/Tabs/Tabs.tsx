/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (id: string) => void,
};

export class Tabs extends React.Component<Props, {}> {
  render() {
    const { tabs, selectedTabId, onTabSelected } = this.props;

    const { content } = tabs.find(
      ({ id }: Tab) => id === selectedTabId,
    ) || tabs[0];

    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(({ id, title }: Tab) => {
              const tabHref = `#${id}`;
              const isActive = id === selectedTabId;

              return (
                <li
                  className={
                    classNames({ 'is-active': isActive })
                  }
                  data-cy="Tab"
                >
                  <a
                    href={tabHref}
                    data-cy="TabLink"
                    onClick={() => onTabSelected(id)}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {content}
        </div>
      </div>
    );
  }
}
