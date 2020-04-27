import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    active: 0,
  }

  clickHandler = index => (
    this.setState(
      { active: index },
    )
  )

  render = () => (
    <div>
      {this.props.tabs.map((tab, index) => (
        <button
          type="button"
          className="button"
          key={tab.title}
          onClick={() => this.clickHandler(index)}
        >
          {tab.title}
        </button>
      ))}
      <p className="paragraph">{this.props.tabs[this.state.active].content}</p>
    </div>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
