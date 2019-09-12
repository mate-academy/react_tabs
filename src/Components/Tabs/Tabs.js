import React from 'react';
import Tab from '../Tab/Tab';
import { tabsPropTypes } from '../PropTypes/PropTypes';
import './Tabs.css';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      isActive: 0,
    };
  }

  onTabSelected = (index) => {
    this.setState({
      activeTab: index,
      isActive: index,
    });
  }

  render() {
    const { tabs } = this.props;

    return (
      <>
        <div className="wrapper">
          <div className="tab-list">
            {tabs.map((tab, i) => (
              <Tab
                handleClick={() => this.onTabSelected(i)}
                key={tab.title}
                title={tab.title}
                index={i}
                isActive={this.state.isActive}
              />
            ))}
          </div>
        </div>
        <div className="text-container">
          {tabs[this.state.activeTab].content}
        </div>
      </>
    );
  }
}

Tabs.propTypes = tabsPropTypes;

export default Tabs;
