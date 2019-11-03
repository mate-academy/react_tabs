import React from 'react';
import PropTypes from 'prop-types';
import './tabs.css';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };

    this.onTabSelected = this.onTabSelected.bind(this);
  }

  onTabSelected(id) {
    this.setState({ activeTab: id });
  }

  render() {
    const { tabs } = this.props;

    return (
      <>
        <div className="tabs">
          {tabs.map(
            (tab, index) => (
              <button
                type="button"
                className={
                  (this.state.activeTab === index) ? 'tab active' : 'tab'
                }
                onClick={() => this.onTabSelected(index)}
                key={this.title}
              >
                {tab.title}
              </button>
            )
          )
          }
        </div>
        <div className="ui bottom attached active tab segment">
          {tabs[this.state.activeTab].content}
        </div>
      </>
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
