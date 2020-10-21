import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onTabSelect = (tab) => {
    this.setState({
      activeTab: tab,
    });
  }

  render() {
    return (
      <div className="tabs">
        <ul className="tab-list">
          {this.props.children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                onClick={this.onTabSelect}
                key={label}
                activeTab={this.state.activeTab}
                label={label}
              />
            );
          })}
        </ul>
        <div className="tabs-content">
          {this.props.children.map((child) => {
            if (child.props.label !== this.state.activeTab) {
              return '';
            }

            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
