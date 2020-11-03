import React from 'react';
import './Tab.css';
import PropTypes from 'prop-types';

export class Tab extends React.Component {
  state = {
    contentActiveTab: this.props.tabs[this.props.index].content,
  }

  onTabSelected = (tabData) => {
    this.setState({
      contentActiveTab: tabData,
    });
  }

  render() {
    const { tabs, index } = this.props;
    const { contentActiveTab } = this.state;

    return (
      <div className="ui grid">
        <div className="four wide column">
          <div className="ui vertical fluid tabular menu">
            {
              tabs.map(tab => (
                <button
                  className="button__text item"
                  type="button"
                  key={tab.index}
                  index={index}
                  onClick={() => this.onTabSelected(tab.content)}
                >
                  {tab.title}
                </button>
              ))
            }
          </div>
        </div>

        <div className="twelve wide stretched column">
          <div className="ui segment">
            {contentActiveTab}
          </div>
        </div>
      </div>
    );
  }
}

Tab.propTypes = {
  index: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
