import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';

class Tabs extends React.Component {
  state = {
    selectedTabIndex: 0,
  }

  chooseSelectedTab = (event) => {
    this.setState({
      selectedTabIndex: +event.target.value,
    });
  }

  render() {
    const { tabs } = this.props;
    const { selectedTabIndex } = this.state;

    return (
      <div className="article">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            value={index}
            className={ClassNames({ active: selectedTabIndex === index },
              'title')}
            onClick={this.chooseSelectedTab}
          >
            {tab.title}
          </button>
        ))}
        {
          <div className="content">
            {tabs[selectedTabIndex].content}
          </div>
        }
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
