/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Tabs extends React.Component {
  state = { activeTab: this.props.index };

  onTabSelected = ({ title }) => {
    const index = this.props.tabs.findIndex((tab) => tab.title === title);

    this.setState({ activeTab: index });
  };

  render() {
    const { activeTab } = this.state;
    const { tabs } = this.props;
    const activeTabObj = tabs[activeTab];

    return (
      <div>
        <ul className="list-container">
          {tabs.map((tab, i) => (
            <li
              key={tab.title}
              className={classNames('list-item', {
                active: tabs[i] === tabs[activeTab],
              })}
            >
              <button
                className="tab"
                type="button"
                onClick={() => this.onTabSelected(tab)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
        <p>{activeTabObj.content}</p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  index: PropTypes.number,
};

Tabs.defaultProps = {
  tabs: [],
  index: 0,
};
