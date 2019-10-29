import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../tab/Tab';




class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  onTabSelected = (index) =>
    this.setState(() => ({activeTab: index}));

  render() {
    const { tabs } = this.props;

    return (
      <>
        <div className="ui attached tabular menu">
          {
            tabs.map((tab, index) => (
              <Tab
                key={tab.title}
                index={index}
                tab={tab}
                tabActivated={() => this.onTabSelected(index)}
                activeTab={this.state.activeTab}
              />
            ))
          }
        </div>
        <div>
          <div class="ui bottom attached segment active tab">{tabs[this.state.activeTab].content}</div>
        </div>
      </>
    )
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
}

export default Tabs;
