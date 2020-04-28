import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.PureComponent {
  state = {
    active: 0,
  }

  handleClick = (index) => {
    this.setState({
      active: index,
    });
  }

  render() {
    const { tabs } = this.props;

    return (
      <section className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            className={`button ${this.state.active === index
              ? 'button-active'
              : ''}`}
            onClick={() => this.handleClick(index)}
          >
            {tab.title}
          </button>
        ))}
        <div>{tabs[this.state.active].content}</div>
      </section>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.objectOf({
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Tabs;
