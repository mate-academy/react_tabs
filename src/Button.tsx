import React from 'react';

import './App.scss';

interface Props {
  tabs: Tab[];
  selectedTab: Tab;
  handleSelect: (id: string) => void,
}

class Button extends React.Component<Props, {}> {
  state = {};

  render() {
    const { tabs, selectedTab, handleSelect } = this.props;

    return (
      <>
        <ul className="nav nav-tabs">
          {tabs.map(tab => {
            return (
              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link"
                  key={tab.id}
                  onClick={() => handleSelect(tab.id)}
                >
                  {tab.title}
                </button>
              </li>
            );
          })}
        </ul>
        {selectedTab.content}
      </>
    );
  }
}

export default Button;
