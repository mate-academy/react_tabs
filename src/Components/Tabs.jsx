import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Tabs extends React.Component {
  state = {
    tabs: this.props.tabs,
    startNumber: 0,
  }

  selectedTab = (index) => {
    this.setState({ startNumber: index });
  }

  render() {
    const { tabs, startNumber: numberOfTab } = this.state;

    return (
      <>
        <div className="container">
          {tabs.map((tab, i) => (
            <button
              key={tab.title}
              type="button"
              className={classNames({
                tab: true,
                tab_selected: i === numberOfTab,
              })}

              onClick={() => {
                this.selectedTab(i);
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <p className="tabContent">
          {tabs[numberOfTab].content}
        </p>
      </>
    );
  }
}
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tabs;
