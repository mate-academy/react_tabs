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
      <div>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            type="button"
            className={`${this.state.active === index
              ? 'button-active'
              : 'button'}`}
            onClick={() => this.handleClick(index)}
          >
            {tab.title}
          </button>
        ))}
        <p className="description">
          {tabs[this.state.active].content}
        </p>
      </div>
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
