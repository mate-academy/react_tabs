import React from 'react';
import PropTypes from 'prop-types';

class Buttons extends React.Component {
  render() {
    return (
      this.props.tabs.map((input, index) => (
        <>
          <input
            type="radio"
            id={`input-${index}`}
            className="tab__input"
            name="button"
            onClick={() => this.props.handler(input.content)}
          />

          <label
            htmlFor={`input-${index}`}
            key={input.title}
            className="tab__button"
          >
            {input.title}
          </label>
        </>
      ))
    );
  }
}

Buttons.propTypes = {
  tabs: PropTypes.arrayOf.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Buttons;
