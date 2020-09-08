import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tabs.scss';

export class Tabs extends React.Component {
  state = {
    tabIndex: 0,
  }

  render() {
    const { tabs } = this.props;
    const { tabIndex } = this.state;

    return (
      <div className="tabs">
        <div>
          {tabs.map((tab, index) => (
            <button
              key={tab.title}
              type="button"
              className={classNames({
                tabs__button: true,
                selected: tabIndex === index,
              })}
              onClick={() => {
                this.setState({
                  tabIndex: index,
                });
              }
              }
            >
              {tab.title}
            </button>
          ))}
        </div>
        <p className="tabs__content">
          {tabs[tabIndex].content}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
};
