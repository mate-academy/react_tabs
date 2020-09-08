import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    tabs: this.props.tabs,
    tabIndex: 0,
  }

  onTabSelected = (index) => {
    this.setState({ tabIndex: index });
  }

  render() {
    const { tabs, tabIndex } = this.state;

    return (
      <>
        <ul className="buttons">
          {tabs.map((tab, index) => (
            <li>
              <button
                className={
                  `button ${(index === tabIndex) ? 'button-selected' : ''}`
                }
                type="button"
                onClick={() => {
                  this.onTabSelected(index);
                }}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
        <p className="content">
          {tabs[tabIndex].content}
        </p>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
