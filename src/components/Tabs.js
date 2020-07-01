import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab';
import { TabValidation } from './PropsValidation';

class Tabs extends React.Component {
  state = {
    selectedIndex: 0,
  }

  onClickTab = index => (
    this.setState({
      selectedIndex: index,
    })
  )

  render() {
    const { tabs } = this.props;
    const { selectedIndex } = this.state;

    return (
      <div className="tabs">
        {tabs.map((tab, i) => (
          <Tab
            title={tab.title}
            key={tab.id}
            index={i}
            isActive={i === selectedIndex}
            selectTab={this.onClickTab}
          />
        )) }
        <hr />
        <div>
          { tabs[selectedIndex].content }
        </div>
      </div>
    );
  }
}

Tabs.propTypes = PropTypes.shape(TabValidation).isRequired;

export { Tabs };
