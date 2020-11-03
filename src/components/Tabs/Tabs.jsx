import React from 'react';
import './Tabs.css';
import propTypes from 'prop-types';

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
          <button
            className={
              `button ${this.state.index === tab.index ? 'active' : ''}`
            }
            type="button"
            key={this.props.tabs.index}
            onClick={() => this.onSelect(tab.index)}
          >
            {tab.title}
          </button>
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
