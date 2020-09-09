import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    tabs: this.props.tabs,
    numberOfTab: 0,
  }

  selectedTab = (index) => {
    this.setState({ numberOfTab: index });
  }

  render() {
    const { tabs, numberOfTab } = this.state;

    return (
      <>
        <div className="container">
          {tabs.map((tab, i) => (
            <button
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
        <p className="content">
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
