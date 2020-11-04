import React from 'react';
import './Tabs.css';
import propTypes from 'prop-types';
import { Tab } from '../Tab';

export class Tabs extends React.Component {
  state = {
    index: 0,
  }

  onSelect = (index) => {
    this.setState(() => ({
      index,
    }));
  }

  render() {
    return (
      <>
        {this.props.tabs.map(tab => (
          <Tab
            tab={tab}
            onSelect={this.onSelect}
            isActive={this.state.index === tab.index}
          />
        ))}
        <p className="content">
          {this.props.tabs[this.state.index].content}
        </p>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    index: propTypes.number.isRequired,
  })).isRequired,
};
