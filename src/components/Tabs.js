import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export class Tabs extends Component {
  state = {
    activeIndex: 0,
  }

  onTabSelected = (index) => {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    const { activeIndex: onContent } = this.state;
    const { tabs } = this.props;
    const activeTab = tabs.find(tab => tab.index === onContent);

    return (
      <div>
        <div className="tabs">
          {tabs.map(({ title, index }) => (
            <Button
              key={index}
              index={index}
              title={title}
              addChange={this.onTabSelected}
            />
          ))}
        </div>

        <p className="ui message">{activeTab.content}</p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    {
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    },
  ).isRequired,
}.isRequired;
