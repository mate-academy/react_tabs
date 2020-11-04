import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';

export class Tabs extends React.Component {
  state = {
    activeTabContent: this.props.tabs[this.props.index].content,
  }

  onTabSelected = (tabData) => {
    this.setState({
      activeTabContent: tabData,
    });
  }

  render() {
    const { tabs } = this.props;
    const { activeTabContent } = this.state;

    return (
      <div className="ui grid">
        <div className="four wide column">
          <div className="ui vertical fluid tabular menu">
            {
              tabs.map((tab, index) => (
                <Button
                  key={this.props.index}
                  index={index}
                  title={tab.title}
                  onSelected={() => this.onTabSelected(tab.content)}
                />
              ))
            }
          </div>
        </div>

        <div className="twelve wide stretched column">
          <div className="ui segment">
            {activeTabContent}
          </div>
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  index: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
