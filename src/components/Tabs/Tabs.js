import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { Tab } from '../Tab/Tab';

export class Tabs extends React.Component {
  state = {
    activeTab: 0,
  }

  onTabSelected = selectedTab => () => {
    this.setState({
      activeTab: selectedTab,
    });
  }

  render() {
    return (
      <>
        <ul className="nav nav-tabs">
          {this.props.children
            ? this.props.children.map((tab, index) => (
              <Tab
                key={tab.props.title}
                activeTab={this.state.activeTab === index}
                title={tab.props.title}
                click={this.onTabSelected(index)}
              />
            ))
            : this.props.tabs.map((tab, index) => (
              <Tab
                key={tab.title}
                activeTab={this.state.activeTab === index}
                title={tab.title}
                click={this.onTabSelected(index)}
              />
            ))
          }
        </ul>
        <div id="myTabContent" className="tab-content">
          {this.props.children
            ? <>{this.props.children[this.state.activeTab].props.children}</>
            : <>{this.props.tabs[this.state.activeTab].content}</>
          }
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })),
  children: PropTypes.arrayOf(shape({
    props: PropTypes.shape({
      title: PropTypes.string.isRequired,
      children: PropTypes.nodes,
    }),
  })),
};

Tabs.defaultProps = {
  tabs: [],
  children: [],
};
