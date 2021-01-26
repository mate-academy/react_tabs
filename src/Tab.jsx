import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = {
    buttonIndex: 0,
  }

  showContent = (event) => {
    this.setState({
      buttonIndex: +event.target.value,
    });
  }

  render() {
    const { tabs } = this.props;
    const { buttonIndex } = this.state;

    return (
      <div className="article">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            value={index}
            className={buttonIndex === index ? 'active title' : 'title'}
            onClick={this.showContent}
          >
            {tab.title}
          </button>
        ))}
        {
          <div className="content">
            {tabs[buttonIndex].content}
          </div>
        }
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
