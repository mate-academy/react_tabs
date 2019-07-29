import React from 'react';
import PropTypes from 'prop-types';

import TabsHeader from './TabsHeader';
import TabsContainer from './TabsContainer';
import TabsCaruselControl from './TabsCaruselControl';

import '../components_css/Tabs.css';

class Tabs extends React.Component {
  state={
    index: 0,
  }

  onTabSelected = (event) => {
    this.setState({ index: +event.target.name });
  }

  render() {
    const { tabs, changeTabOrder } = this.props;
    const { index } = this.state;

    return (
      <div className="Tabs">
        <TabsCaruselControl
          changeTabOrder={changeTabOrder}
        />

        <TabsHeader
          tabs={tabs}
          onTabSelected={this.onTabSelected}
          index={index}
        />

        <TabsContainer
          tabs={tabs}
          index={index}
        />
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeTabOrder: PropTypes.func.isRequired,
};

export default Tabs;
