import React from 'react';
import classNames from 'classnames';
import { LoremIpsum } from 'react-lorem-ipsum';

import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends React.PureComponent {
  state = {
    selectTabs: tabs[0],
  }

  onClickTab = (event) => {
    this.setState({
      selectTabs: tabs.find(ele => ele.title === event.target.textContent),
    });
  }

  render() {
    const { selectTabs } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectTabs.title}
        </h1>
        <ul className="nav nav-tabs">
          {tabs.map(tab => (
            <lu key={tab.id}>
              <button
                type="button"
                className={classNames(`nav-link`,
                  { active: selectTabs.id === tab.id })}
                onClick={this.onClickTab}
              >
                {tab.title}
              </button>
            </lu>
          ))}
        </ul>
        <div>
          <LoremIpsum p={selectTabs.id} />
        </div>
      </div>
    );
  }
}
