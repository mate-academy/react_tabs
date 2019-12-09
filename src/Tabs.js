import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = { selectedTab: 0 };

  render() {
    const { selectedTab } = this.state;
    const { tabs } = this.props;

    return (
      <div className="wrapper">
        {tabs.map((tab, i) => (
          <button
            type="button"
            key={tab.title}
            onClick={() => {
              this.setState({ selectedTab: i });
            }}
            className={(
              i === selectedTab ? 'button is-active' : 'button'
            )}
          >
            { tab.title }
          </button>
        ))}
        <div className="content">{tabs[selectedTab].content}</div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};

export default Tabs;
