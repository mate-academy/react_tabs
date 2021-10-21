import React from 'react';

type Props = {
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
  selectedTab: Tab;
};

export class Tabs extends React.PureComponent<Props, {}> {
  render() {
    const { tabs, onTabSelected, selectedTab } = this.props;

    return (
      <>
        <ul className="list">
          {[...tabs].map(tab => (
            <li>
              <button
                className="tab"
                type="button"
                onClick={() => onTabSelected(tab)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
        <p className="content">
          {selectedTab.content}
        </p>
      </>
    );
  }
}
