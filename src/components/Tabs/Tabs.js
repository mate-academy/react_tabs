import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';
import './Tabs.css';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      article: props.tabs[props.index].content,
    };
  }

  generateTabContent = (index) => {
    this.setState(() => ({
      article: this.props.tabs[index].content,
    }));
  }

  render() {
    return (
      <div className="tabs__list">
        {this.props.tabs.map((tabItem, index) => (
          <Tab
            title={tabItem.title}
            index={index}
            changeTab={this.generateTabContent}
          />
        ))}
        <p className="tabs__content">{this.state.article}</p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  index: PropTypes.number.isRequired,
};

export default Tabs;
