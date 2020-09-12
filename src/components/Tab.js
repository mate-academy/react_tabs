import React from 'react';
import PropTypes from 'prop-types';

import { Switch } from './Switch';

export class Tab extends React.Component {
  state = {
    active: 0,
  }

  changeText = (index) => {
    this.setState({
      active: index,
    });
  };

  tabPress = (event) => {
    event.target.click();
  };

  render() {
    const { tabs } = this.props;
    const { active } = this.state;

    return (
      <>
        <div className="tab__tittle">
          {tabs.map((tab, index) => (
            <Switch
              key={tab.title}
              title={tab.title}
              isSelected={active === index}
              handleClick={() => this.changeText(index)}
              tabPress={event => this.tabPress(event)}
            />
          ))}
        </div>
        <p className="tab__content">
          {tabs[this.state.active].content}
        </p>
      </>
    );
  }
}

Tab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
