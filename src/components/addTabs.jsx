import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './button';
import 'semantic-ui-css/semantic.min.css';

export class Tabs extends React.Component {
  state = {
    selectedContent: this.props.tabs[this.props.index].content,
  }

  onTabSelected = (content) => {
    this.setState({
      selectedContent: content,
    });
  }

  render() {
    const { tabs } = this.props;

    return (
      <div className="ui container">
        <div className="ui attached tabular menu">
          {tabs.map(({ title, content, index }) => (
            <Button
              onTabSelected={this.onTabSelected}
              content={content}
              key={index}
              title={title}
            />
          ))}
        </div>
        <div className="ui bottom attached segment active tab">
          {this.state.selectedContent}
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
