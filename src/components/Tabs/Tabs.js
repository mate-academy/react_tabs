import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

class Tabs extends React.Component {
  state = {
    index: 0,
  }

  onTabSelected = (indexOfTab) => {
    this.setState({
      index: indexOfTab,
    });
  }

  render() {
    const { tabs } = this.props;
    const { index } = this.state;

    return (
      <div className="tabs">
        {tabs.map((tab, indexOfTab) => (
          <button
            onClick={() => this.onTabSelected(indexOfTab)}
            type="button"
            key={tab.title}
            className={
              indexOfTab === index
                ? 'active button'
                : 'button'}
          >
            {tab.title}
          </button>
        ))}
        <div className="tabs__container">
          <p className="tabs__container-text">
            {tabs[index].content}
          </p>
        </div>
      </div>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
