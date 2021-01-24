import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    index: 0,
    content: this.props.tabs[0].content,
  }

  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string,
    }).isRequired).isRequired,
  }

  onTabSelected = (idx, content) => {
    this.setState({
      index: idx,
      content,
    });
  }

  render() {
    const { tabs } = this.props;

    return (
      <div className="m-5">
        {tabs.map((tab, i) => (
          <button
            className={`button is-outlined ${
              this.state.index === i ? 'is-focused' : ''}`
            }
            key={tab.title}
            type="button"
            onClick={() => this.onTabSelected(i, tab.content)}
          >
            {tab.title}
          </button>
        ))}
        <div className="notification is-info is-light">
          {this.state.content}
        </div>
      </div>
    );
  }
}
