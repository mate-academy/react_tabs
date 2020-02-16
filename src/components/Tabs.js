import React from 'react';
import PropTypes from 'prop-types';

export default class Tabs extends React.Component {
  state = {
    tabActive: 0,
  }

  onTabSelected = (index) => {
    this.setState({
      tabActive: index,
    });
  }

  render() {
    const { tabActive } = this.state;
    const { tabs } = this.props;

    return (
      <>
        <hr className="tab-line" />
        {tabs.map((tab, index) => (
          <button
            type="button"
            key={tab.title}
            className={tabActive === index ? 'tab-active' : 'tab'}
            onClick={() => this.onTabSelected(index)}
          >
            {tab.title}
          </button>
        ))}
        <p className="text">{tabs[tabActive].content}</p>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};
