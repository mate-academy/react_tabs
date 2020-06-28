import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    index: 0,
  }

  tabSwitch = (tabIndex) => {
    this.setState({
      index: tabIndex,
    });
  }

  render() {
    const { tabs } = this.props;
    const { index } = this.state;

    return (
      <div className="tabs">
        {tabs.map((tab, tabIndex) => (
          <button
            onClick={() => this.tabSwitch(tabIndex)}
            type="button"
            key={tab.title}
            className={
              tabIndex === index
                ? 'tabs__click tabs__click-active'
                : 'tabs__click'}
          >
            {tab.title}
          </button>
        ))}
        <div className="tabs__container">
          {tabs[index].content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Tabs;
