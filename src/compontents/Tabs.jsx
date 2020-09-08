import React from 'react';
import './Tabs.scss';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

export class Tabs extends React.Component {
  state = {
    currentTab: 0,
  }

  render() {
    const { tabs } = this.props;
    const { currentTab } = this.state;

    return (
      <div className="container">
        <div className="tabs">
          {tabs.map((tab, index) => (
            <button
              type="button"
              key={tab.id}
              className={ClassNames({
                tabs__button: true,
                'tabs__button--active': tab.id === currentTab,
              })}
              onClick={() => {
                this.setState({
                  currentTab: index,
                });
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <article className="tabs__content">
          {tabs[currentTab].content}
        </article>
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
