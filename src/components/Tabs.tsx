import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  changeTab: (tab: Tab) => void;
};

class Tabs extends React.PureComponent<Props> {
  render() {
    const {
      tabs,
      selectedTabId,
      changeTab,
    } = this.props;

    return (
      <>
        <ul className="Nav">
          {tabs.map(tab => (
            <li
              key={tab.id}
            >
              <a
                className="Nav__link"
                onClick={(event) => {
                  event.preventDefault();
                  if (selectedTabId !== tab.id) {
                    changeTab(tab);
                  }
                }}
                href={selectedTabId}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>

        <p>
          {tabs.find(tab => tab.id === selectedTabId)?.content}
        </p>
      </>
    );
  }
}

export default Tabs;
