import React from 'react';
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export class Tabs extends React.Component<Props> {
  handleTabClick = (tab: Tab) => {
    this.props.onTabSelected(tab);
  };

  render() {
    const { tabs, selectedTabId } = this.props;

    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <li
                className={tab.id === selectedTabId ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
                onClick={() => this.handleTabClick(tab)}
              >
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {tabs.map(tab => (
          <div
            className="block"
            data-cy="tab-content"
            key={tab.id}
            style={{
              display: tab.id === selectedTabId ? 'block' : 'none',
            }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    );
  }
}
