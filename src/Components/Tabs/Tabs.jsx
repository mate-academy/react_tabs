import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';
import '../Tabs/Tabs.css';

export class Tabs extends React.Component {
  state = {
    currentValue: this.props.default,
    tabs: this.props.tabs,
  }

  onTabSelected = (content) => {
    this.setState({currentValue: content})
  }

  render() {
    const {currentValue, tabs} = this.state;
  
    return (
      <div className="tab">
        <p className="tab__title">{currentValue}</p>
        <ul className="tab__list">
          {
            tabs.map((user, index) => (
              <Tab
                index={index}
                user={user}
                onTabSelected={this.onTabSelected}
              />
            ))
          }
        </ul>
      </div>
    );
  };
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired
}
