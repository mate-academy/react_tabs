import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    tabIndex: 0,
  }

  onTabSelected = (index) => {
    this.setState({ tabIndex: index });
  }

  render() {
    const { tabs } = this.props;
    const { tabIndex } = this.state;

    return (
      <div className="tabs-container">
        <div className="tabs">
          {tabs.map(tab => (
            <div className="tabs__tab" key={tab.index}>
              <button
                type="button"
                className={classNames({
                  tabs__button: true,
                  'tabs__button--active': tabIndex === tab.index,
                })}
                onClick={() => {
                  this.onTabSelected(tab.index);
                }}
              >
                {tab.title}
              </button>
            </div>
          ))}
        </div>

        <p className="tabs-container__content">
          {tabs[tabIndex].content}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      index: PropTypes.number.isRequired,
    }),
  ),
};

Tabs.defaultProps = {
  tabs: [],
};
