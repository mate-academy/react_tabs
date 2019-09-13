import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const tabId = Number(event.target.id);

    this.props.handleActiveIndex(tabId);
  }

  render() {
    const { tab, currentIndex } = this.props;

    return (
      <button
        id={currentIndex}
        type="button"
        onClick={this.handleClick}
      >
        {tab.title}
      </button>
    );
  }
}

Tab.propTypes = {
  tab: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  currentIndex: PropTypes.number.isRequired,
  handleActiveIndex: PropTypes.func.isRequired,
};

export default Tab;
