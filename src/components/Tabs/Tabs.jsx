import React, { Component } from 'react';
import './Tabs.scss';
import Tab from '../Tab/Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
    };
  }

  onItemSelected = (index) => {
    this.setState({
      activeItem: index,
    });
  }

  render() {
    const { activeItem } = this.state;
    const { tabs } = this.props;

    return (
      <>
        <div className="tabs">
          {tabs.map((tab, index) => (
            <Tab
              handleClick={() => { this.onItemSelected(index); }}
              key={tab.title}
              index={index}
              activeItem={activeItem}
            />
          ))}
        </div>
        <div className="text-container">
          {tabs[activeItem].content}
        </div>
      </>
    );
  }
}

export default Tabs;
