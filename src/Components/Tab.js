import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Tab extends Component {
  constructor({title, index, handlerClick}) {
    super();
    this.handlerClick = handlerClick;
    this.title = title;
    this.index = index;
  }

  render() {
    return (
      <button
        className="btn btn-primary tabs"
        type="button"
        onClick={this.handlerClick}
      >
        {this.title}
      </button>
    );
  }
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handlerClick: PropTypes.func.isRequired,
};
