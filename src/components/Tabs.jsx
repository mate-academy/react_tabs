import React from 'react';
import PropTypes, { string } from 'prop-types';
import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    selectedTab: 0,
  }

  selectTab = (index) => {
    this.setState({ selectedTab: index });
  }

  render() {
    const { tabs } = this.props;
    const { selectedTab } = this.state;

    return (
      <>
        <div className="Tabs">
          {tabs.map((tab, index) => (
            <button
              type="button"
              onClick={() => this.selectTab(index)}
              className={index === selectedTab ? 'button active' : 'button'}
            >
              {tab.title}
            </button>
          ))
          }
        </div>

        <div className="App__content content">
          {tabs[selectedTab].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes > string.isRequired,
    }).isRequired,
  ).isRequired,
};
