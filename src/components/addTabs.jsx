import React from 'react';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';

export class Tabs extends React.Component {
  state = {
    contentSelected: this.props.tabs[this.props.index].content,
  }

  onTabSelected = (content) => {
    this.setState({
      contentSelected: content,
    });
  }

  render() {
    const { tabs } = this.props;

    return (
      <div className="ui container">
        <div className="ui attached tabular menu">
          {tabs.map(({ title, content, index }) => (
            <button
              type="button"
              className="ui top attached button"
              onClick={() => this.onTabSelected(content)}
              key={index}
            >
              {title}
            </button>
          ))}
        </div>
        <div className="ui bottom attached segment active tab">
          {this.state.contentSelected}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  index: PropTypes.number.isRequired,
};
