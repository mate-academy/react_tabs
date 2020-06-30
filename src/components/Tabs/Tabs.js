import React from 'react';
import { shapeAllTabs } from '../Shapes';
import { Tab } from '../Tab/Tab';

export class Tabs extends React.Component {
  state ={
    textContent: this.props.tabs[0].content,
  }

  change = (index) => {
    this.setState({
      textContent: this.props.tabs[index].content,
    });
  };

  render() {
    return (
      <div className="wrapper">
        {this.props.tabs.map((tab, index) => (
          <Tab
            key={tab.title}
            title={tab.title}
            index={index}
            change={this.change}
          />
        ))}
        <p>{this.state.textContent}</p>
      </div>
    );
  }
}

Tabs.propTypes = shapeAllTabs.isRequired;
