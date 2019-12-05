import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  switchTab(i) {
    this.setState({ index: i });
  }

  render() {
    const { props: [...arr] } = this.props;

    return (
      <>
        <div className="tabs">
          {arr.map(({ title }, index) => (
            <button
              type="button"
              key={title}
              onClick={() => this.switchTab(index)}
              className={
                this.state.index === index
                  ? 'tab tab--active'
                  : 'tab tab--notactive'
              }
            >
              {title}
            </button>
          ))}
        </div>
        <article className="content">{arr[this.state.index].content}</article>
      </>
    );
  }
}

Tabs.propTypes = { props: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Tabs;
