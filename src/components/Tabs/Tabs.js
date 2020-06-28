import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    activeTab: 1,
  }

  componentDidMount() {
    const buttons = document.querySelectorAll('.button');

    [...buttons].forEach((button) => {
      if (+button.dataset.tab === this.state.activeTab) {
        button.classList.add('button--active');
      }
    });
  }

  switchTab = (event) => {
    this.setState({
      activeTab: event.target.dataset.tab,
    });

    const buttons = event.target.closest('.tabs').children;

    [...buttons].forEach((button) => {
      if (button.classList.contains('button--active')) {
        button.classList.remove('button--active');
      }
    });

    event.target.classList.toggle('button--active');
  };

  render() {
    const { tabs } = this.props;

    return (
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            className="button"
            data-tab={index}
            onClick={this.switchTab}
          >
            {tab.title}
          </button>
        ))}
        <p className="content">
          {tabs[this.state.activeTab].content}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
