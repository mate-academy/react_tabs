import React from 'react';
import PropType from 'prop-types';
import { Tab } from '../Tab/Tab';
import './Tabs.css';
import { tabShape } from './tabShape';

class Tabs extends React.Component {
  state = {
    content: this.props.tabs[this.props.index].content,
  };

  onTabSelected = (index) => {
    this.setState({
      content: this.props.tabs[index].content,
    });
  };

  render() {
    return (
      <div className="tabs">
        <div className="tabs__list">
          {this.props.tabs.map((tab, index) => (
            <Tab
              key={tab.title}
              onSelected={() => this.onTabSelected(index)}
            >
              {tab.title}
            </Tab>
          ))}
        </div>
        <p className="tabs__content">{this.state.content}</p>
      </div>
    );
  }
}

export { Tabs };

Tabs.propTypes = {
  tabs: PropType.arrayOf(tabShape).isRequired,
  index: PropType.number,
};

Tabs.defaultProps = {
  index: 0,
};
