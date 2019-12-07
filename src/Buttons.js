import React from 'react';
import PropTypes from 'prop-types';

class Buttons extends React.Component {
  state = { index: 0 }

  render() {
    return (
      <section className="tabcontain">
        {
          this.props.tab.map((output, i) => (
            <button
              type="button"
              key={output.title}
              className={i === this.state.index ? 'tab tab-selected' : 'tab'}
              onClick={() => {
                this.setState({ index: i });
              }}
            >
              {output.title}
            </button>
          ))
        }
        <hr className="hr" />
        <div className="output">{this.props.tab[this.state.index].content}</div>
      </section>
    );
  }
}

Buttons.propTypes = { tab: PropTypes.objectOf(PropTypes.any).isRequired };

export default Buttons;
