import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

class Tabs extends React.Component<Props> {
  handleTabClick = (tab: Tab) => {
    const { selectedTabId, onTabSelected } = this.props;

    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  render() {
    const { tabs, selectedTabId } = this.props;

    return (
      <ul>
        {
          tabs.map(tab => (
            <li key={tab.id} className="tab">
              <button
                type="button"
                onClick={() => this.handleTabClick(tab)}
              >
                {tab.title}
              </button>
              {selectedTabId === tab.id
                && (
                  <p className="tab__content">
                    {tab.content}
                  </p>
                )}
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Tabs;
