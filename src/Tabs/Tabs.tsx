import React from 'react';

import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: number;
  onTabSelected: (event: React.MouseEvent<HTMLElement>) => void
};

export class Tabs extends React.PureComponent<Props, {}> {
  render() {
    const { tabs, selectedTabId, onTabSelected } = this.props;

    return (
      <nav>
        <ul className="nav nav-tabs">
          {tabs.map((tab, i) => {
            const { id, title } = tab;

            return (
              <li key={id} className="nav-item">
                <a
                  href="./"
                  className={classNames('nav-link', { active: selectedTabId === i })}
                  onClick={onTabSelected}
                >
                  {title}
                </a>
                {' '}
              </li>
            );
          })}
        </ul>
        {tabs[selectedTabId].content}
      </nav>
    );
  }
}
