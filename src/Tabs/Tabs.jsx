import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    currentTabIndex: 0,
  }

  render() {
    const { tabs } = this.props;
    const { currentTabIndex } = this.state;

    return (
      <div className="Tabs">
        <div className="tabs__buttons">
          {tabs.map((tab, index) => (
            <button
              type="button"
              key={tab.title}
              className={classNames(
                'tabs__tab',
                { 'tabs__tab--selected': currentTabIndex === index },
              )}
              onClick={() => {
                this.setState({
                  currentTabIndex: index,
                });
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <article className="tab-content">
          {tabs[currentTabIndex].content}
        </article>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
