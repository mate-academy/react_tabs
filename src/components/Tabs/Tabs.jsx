import React from 'react';
import './Tabs.css';
import propTypes from 'prop-types';
import { Title } from '../Title';

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
          <Title
            tab={tab}
            onSelect={this.onSelect}
            index={this.props.tabs.index}
            indexState={this.state.index}
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
  tabs: propTypes.arrayOf.isRequired,
};
