import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    selectedIndex: 0,
  }

  selectTab = (selectedIndex) => {
    this.setState({
      selectedIndex,
    });
  }

  render() {
    const { tabs } = this.props;
    const { selectedIndex } = this.state;

    return (
      <div className="tabs__container">
        <div className="tabs__tab tab">
          {tabs.map((tab, index) => (
            <Button
              key={tab.title}
              index={index}
              title={tab.title}
              selectTab={this.selectTab}
              className={
                +selectedIndex === index
                  ? 'tab__item tab__item--is-active'
                  : 'tab__item'
              }
            />
          ))}
        </div>

        <div className="tabs__selected">
          {tabs[selectedIndex].content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
