import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
    };
  }

  onTabSelected = (index) => {
    this.setState({
      active: index,
    });
  }

  render() {
    const { tabs } = this.props;

    return (
      <div>
        {tabs.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => this.onTabSelected(index)}
            className={index === this.state.active ? 'button button-active' : 'button'}
          >
            {item.title}
          </button>
        ))}
        <p className="text">
          {tabs[this.state.active].content}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Tabs;
