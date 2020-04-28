import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    active: 0,
  }

  tabSelected = index => (this.setState(
    { active: index },
  )
  );

  render() {
    return (
      <div className="tab__list">
        {this.props.tabs.map((tab, index) => (
          <button
            type="button"
            className="button"
            key={tab.title}
            onClick={() => this.tabSelected(index)}
          >
            {tab.title}
          </button>
        ))}
        <p>
          {this.props.tabs[this.state.active].content}
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
