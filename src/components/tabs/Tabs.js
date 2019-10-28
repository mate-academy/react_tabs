import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabItem from '../tab/TabItem';

class Tabs extends Component {
  state = {
    activeItem: 0,
  };

  onItemSelected = (index) => {
    this.setState({
      activeItem: index,
    });
  };

  render() {
    const { activeItem } = this.state;
    const { tabs } = this.props;

    return (
      <>
        <div className="ui secondary menu">
          {tabs.map((tab, index) => (
            <TabItem
              handleClick={() => this.onItemSelected(index)}
              title={tab.title}
              key={tab.title}
              index={index}
              activeItem={activeItem}
            />
          ))}
        </div>
        <div className="ui segment active tab">
          {tabs[activeItem].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};

export default Tabs;
