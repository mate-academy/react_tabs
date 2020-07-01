import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab';
import { Shape } from './Shape';

export class Tabs extends React.Component {
  state = {
    tabNumber: 0,
  };

  changeTab = (number) => {
    this.setState({
      tabNumber: number,
    });
  }

  render() {
    const { tabs } = this.props;

    return (
      <div className="App">
        {tabs.map((tab, index) => (
          <Tab
            tab={tab}
            onFocus={() => this.changeTab(index)}
            isFocused={this.state.tabNumber === index}
          />
        ))}
        <p>{tabs[this.state.tabNumber].content}</p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(Shape).isRequired,
};

export default Tabs;
