import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends React.Component {
  state = {
    activeTab: 0,
  };

  onTabSelected(id) {
    this.setState({ activeTab: id });
  }

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="wrapper">
        <div className="tabs">
          {tabs.map(
            (tab, index) => (
              <Tab
                activeTab={activeTab}
                title={tab.title}
                key={tab.title}
                index={index}
                handleClick={() => this.onTabSelected(index)}
              />
            ),
          )
          }
        </div>

        <div className="tab-content">
          <p>{tabs[this.state.activeTab].content}</p>
        </div>
      </div>
    );
  }
}
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
export default Tabs;
