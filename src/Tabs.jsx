import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    activeTabId: 0,
  }

  render() {
    const { tabs } = this.props;
    const { activeTabId } = this.state;

    return (
      <div className="tabs">
        {tabs.map((tab, i) => (
          <button
            className="tabs__buttons"
            type="button"
            key={tab.title}
            onClick={() => {
              this.setState({
                activeTabId: i,
              });
            }}
          >
            {tab.title}
          </button>
        ))}
        <p className="tabs__active">
          {tabs[activeTabId].content}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string.isRequired,
    ).isRequired,
  ).isRequired,
};

export default Tabs;
