import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';
import { TabsButtons } from '../TabsButton/TabsButton';

class Tabs extends React.PureComponent {
  state = {
    active: 0,
  }

  changeContent = (tabId) => {
    this.setState({
      active: tabId,
    });
  }

  render() {
    const tabs = [...this.props.tabs];

    return (
      <div className="tabs">
        <TabsButtons tabs={tabs} changeContent={this.changeContent} />
        <p>{tabs[this.state.active].content}</p>
      </div>
    );
  }
}

export { Tabs };

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
