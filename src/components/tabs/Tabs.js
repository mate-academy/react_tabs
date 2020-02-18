import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tab from '../tab/Tab';
import './tabs.css';

class Tabs extends React.Component {
  state = {
    activeTab: 0,
  };

  changeActiveTab = (index) => {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <>
        {
          tabs.map((tab, index) => (
            <button
              type="button"
              key={tab.title}
              onClick={
                () => {
                  this.changeActiveTab(index);
                }
              }
              className={classNames(
                { activeTab: activeTab === index },
              )}
            >
              {tab.title}
            </button>
          ))
        }
        <Tab
          tabs={tabs}
          state={this.state.activeTab}
        />
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default Tabs;
