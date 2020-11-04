import React from 'react';
import PropTypes from 'prop-types';
import { TabButton } from './TabButton';

import './Tabs.css';

export default class Tabs extends React.Component {
  state = {
    tabContent: this.props.tabs[this.props.index].content,
  }

  onTabSelected = (content) => {
    this.setState({
      tabContent: content,
    });
  }

  render() {
    const { tabs } = this.props;

    return (
      <>
        <div className="tab">
          {tabs.map(tab => (
            <TabButton
              tab={tab}
              onTabSelected={this.onTabSelected}
              key={tab.id}
            />
          ))}
        </div>
        <div className="tabcontent">
          <p>{this.state.tabContent}</p>
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  index: PropTypes.number,
};

Tabs.defaultProps = {
  index: 0,
};
