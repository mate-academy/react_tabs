import React from 'react';
import './Tabs.css';
import Proptypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    currentTab: 0,
  }

  changeCurrentTab = (id) => {
    this.setState({ currentTab: id });
  }

  render() {
    const { currentTab } = this.state;
    const { tabs } = this.props;

    return (
      <div className="main">
        {tabs.map((tab, index) => (
          <button
            className={currentTab === index ? 'button active' : 'button'}
            key={tab.title}
            type="button"
            onClick={() => this.changeCurrentTab(index)}
          >
            {tab.title}
          </button>
        ))}
        <p>{tabs[currentTab].content}</p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: Proptypes.arrayOf(Proptypes.shape({
    title: Proptypes.string.isRequired,
    content: Proptypes.string.isRequired,
  }).isRequired).isRequired,
};
