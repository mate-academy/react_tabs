import React from 'react';

import { Tab } from '../types/Tab';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (obj: Tab) => void,
};

type State = {
  selectedId: string,
};

export class Tabs extends React.Component<Props, State> {
  state = {
    selectedId: this.props.selectedTabId,
  };

  render() {
    const { selectedId } = this.state;

    const { onTabSelected, tabs } = this.props;

    return (
      <>
        <form
          className="Tabs"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          {tabs.map(tab => (
            <li
              key={tab.id}
              className="Tabs__item"
            >
              <button
                type="submit"
                className={
                  tab.id === selectedId
                    ? 'Tabs__button Tabs__button--active'
                    : 'Tabs__button'
                }
                onClick={() => {
                  this.setState({ selectedId: tab.id });
                  onTabSelected(tab);
                }}
              >
                {tab.title}
              </button>
              <span
                data-cy="tab-content"
                className={
                  tab.id === selectedId
                    ? 'Tabs__content--active'
                    : 'Tabs__content'
                }
              >
                {selectedId === tab.id ? tab.content : null}
              </span>
            </li>
          ))}
        </form>
      </>
    );
  }
}
