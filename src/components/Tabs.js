import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
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
      <section className="section">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            className={`button ${this.state.active === index
              ? 'button--active'
              : ''}`}
            onClick={() => this.handleClick(index)}
          >
            {tab.title}
          </button>
        ))}
        <p className="text">
          {tabs[this.state.active].content}
        </p>
      </section>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Tabs;
