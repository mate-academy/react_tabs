import React from 'react';
import './Tabs.scss';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    tabs: this.props.tabs,
    tabIndex: 0,
  }

  changeTab = (index) => {
    this.setState({ tabIndex: index });
  }

  render() {
    const { tabs, tabIndex } = this.state;

    return (
      <section className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            className="tabs__item"
            value={tab.content}
            onClick={() => {
              this.changeTab(index);
            }}
            type="button"
          >
            {tab.title}
          </button>
        ))}
        <p className="tabs__content">
          {tabs[tabIndex].content}
        </p>
      </section>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
