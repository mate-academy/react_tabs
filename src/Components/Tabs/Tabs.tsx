import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

interface State {
  selectedTabId: string,
}

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Props {
  usedTabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export class Tabs extends React.Component<Props, State> {
  state = {
    selectedTabId: this.props.selectedTabId,
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps.selectedTabId !== this.props.selectedTabId) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        selectedTabId: this.props.selectedTabId,
      });
    }
  }

  render() {
    const { usedTabs, onTabSelected } = this.props;
    const { selectedTabId } = this.state;

    return (
      <ul
        className="tabs"
      >
        {usedTabs.map((tab: Tab) => (
          <li
            key={tab.id}
            className="tabs__tab"
          >
            <button
              type="button"
              className={classNames('tabs__button', { 'tabs__button--selectedTab': tab.id === selectedTabId })}
              onClick={() => {
                if (selectedTabId !== tab.id) {
                  onTabSelected(tab);
                }
              }}
            >
              <h3
                className={classNames({ 'tabs__tab--selectedTab': tab.id === selectedTabId })}
              >
                {tab.title}
              </h3>
            </button>
            <p
              className={classNames('tabs__paragraph', { 'tabs__paragraph--selectedTab': tab.id === selectedTabId })}
            >
              {tab.content}
            </p>
          </li>
        ))}
      </ul>
    );
  }
}
