import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab';

export class Tabs extends PureComponent {
  state = {
    activeTabContent: this.props.tabs[0].content,

  }

  onTabSelected = (content) => {
    this.setState({
      activeTabContent: content,
    });
  }

  render() {
    const { tabs } = this.props;
    const { activeTabContent: tabContent } = this.state;

    return (
      <div className="ui container">
        <div className="ui top attached tabular menu">
          {
            tabs.map(({ title, content }) => (
              <Tab
                title={title}
                onTabSelected={() => this.onTabSelected(content)}
                key={title}
                currClass={
                  content === tabContent
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
