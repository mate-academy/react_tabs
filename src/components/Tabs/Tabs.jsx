import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { TabShape } from '../../shapes/TabShape';

export class Tabs extends React.Component {
  state = {
    chosenTabIndex: this.props.index,
    chosenTabContent: this.props.tabs[this.props.index].content,
  }

  onTabSelected = (index, content) => {
    this.setState({
      chosenTabIndex: index,
      chosenTabContent: content,
    });
  };

  render() {
    const { tabs } = this.props;
    const { chosenTabIndex, chosenTabContent } = this.state;

    return (
      <div className="tabs__wrapper">
        <div className="tabs is-toggle">
          <ul>
            {tabs.map(tab => (
              <li
                className={
                  ClassNames('tab', { active: chosenTabIndex === tab.index })
                }
                key={tab.index}
              >
                <button
                  onClick={() => this.onTabSelected(tab.index, tab.content)}
                  type="button"
                  className="tab__button"
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="content">{chosenTabContent}</div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(TabShape).isRequired,
  index: PropTypes.number.isRequired,
};
