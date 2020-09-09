import React from 'react';
import './Tabs.css';
import cn from 'classnames';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    showingContent: this.props.tabs[0].content,
    currentTabIndex: 0,
  }

  onTabSelected = (event, content, index) => {
    this.setState({
      showingContent: content,
      currentTabIndex: index,
    });
  };

  render() {
    const { tabs } = this.props;
    const { currentTabIndex } = this.state;

    return (
      <>
        <div className="tabs">
          {tabs.map((tab, index) => (
            <button
              type="button"
              key={tab.title}
              onClick={
                event => this.onTabSelected(event, tab.content, index)
              }
              className={
                cn('tabs__button', { active: currentTabIndex === index })
              }
            >
              {tab.title}
            </button>
          ))}
        </div>
        <p className="tabs__content">
          { this.state.showingContent }
        </p>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
