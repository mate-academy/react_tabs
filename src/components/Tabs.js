import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    activeTab: 0,
  };

  onTabSelected(id) {
    this.setState({ activeTab: id });
  }

  render() {
    const { tabs } = this.props;

    return (
      <div className="wrapper">
        <div className="tabs">
          {tabs.map(
            (tab, index) => (
              <button
                type="button"
                className={
                  (this.state.activeTab === index)
                    ? 'tab active'
                    : 'tab'
                }
                onClick={() => this.onTabSelected(index)}
                key={tab.title}
              >
                {tab.title}
              </button>
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
