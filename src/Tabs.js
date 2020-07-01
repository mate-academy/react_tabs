import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    activeTab: 0,
  }

  changeActiveIndex = (index) => {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    return (
      <>
        <div className="tabs">
          {
            this.props.tabs.map((tab, index) => (
              <button
                type="button"
                key={tab.title}
                onClick={() => this.changeActiveIndex(index)}
                className={
                  this.state.activeTab === index
                    ? 'tab tab--active'
                    : 'tab'}
              >
                {tab.title}
              </button>
            ))
          }
        </div>
        <p>{this.props.tabs[this.state.activeTab].content}</p>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
