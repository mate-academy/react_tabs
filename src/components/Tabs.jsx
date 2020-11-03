import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab';

export class Tabs extends PureComponent {
  state = {
    tabContent: this.props.tabs[this.props.index].content,
    currTabId: 0,
  }

  onTabSelected = (content, index) => {
    this.setState({
      tabContent: content,
      currTabId: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { tabContent } = this.state;

    return (
      <div className="ui container">
        <div className="ui top attached tabular menu">
          {
            tabs.map(({ title, content, index }) => (
              <Tab
                title={title}
                onTabSelected={() => this.onTabSelected(content, index)}
                key={index}
                currClass={
                  index === this.state.currTabId
                    ? 'ui teal active button'
                    : 'ui active item'
                }
              />
            ))
          }
        </div>
        <div className="ui bottom attached tab segment active">
          {tabContent}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(Tab.PropTypes).isRequired,
  index: PropTypes.number.isRequired,
};
