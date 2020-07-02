import React from 'react';
import Tab from '../Tab/Tab';
import Shapes from '../Shape';
import './Tabs.css';

export default class Tabs extends React.Component {
  state = {
    currentTitle: this.props.tabs[0].title,
  }

  clickTab = (tab) => {
    this.props.onChangeTab(tab.content);
    this.setState({
      currentTitle: tab.title,
    });
  }

  render() {
    return (
      <div className="tabs">
        {this.props.tabs.map(tab => (
          <div
            className={tab.title === this.state.currentTitle ? `current` : ''}
            key={tab.id}
          >
            <Tab onClickTab={this.clickTab} tab={tab} />
          </div>
        ))}
      </div>
    );
  }
}

Tabs.propTypes = Shapes.ShapeTabs.isRequired;
