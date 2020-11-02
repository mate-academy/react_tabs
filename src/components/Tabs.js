import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab';
import { tabType } from '../types/TabType';

export class Tabs extends React.PureComponent {
  state = {
    active: this.props.index,
    content: this.props.tabs[this.props.index]
      ? this.props.tabs[this.props.index].content
      : 'Ooops... Something went wrong',
  }

  onTabSelected = (chosen, child) => {
    this.setState({
      active: chosen,
      content: child,
    });
  }

  render() {
    const { tabs } = this.props;
    const { active, content } = this.state;

    return (
      <div>
        <ul className="nav nav-tabs">
          {tabs.map(tab => (
            <li className="nav-item" key={tab.id}>
              <Tab
                onClick={this.onTabSelected}
                stateActive={active}
                {...tab}
              >
                {tab.content}
              </Tab>
            </li>
          ))}
        </ul>

        <div>
          {content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    ...tabType,
  })).isRequired,
  index: PropTypes.number.isRequired,
};
