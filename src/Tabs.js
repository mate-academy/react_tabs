
import React from 'react';

import PropTypes, { shape } from 'prop-types';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.tabs[0].content,

    };
    this.changeTab = (event) => {
      this.setState({
        content: props.tabs.find(tab => (
          event.nativeEvent.srcElement.textContent === tab.title)).content,
      });
    };
  }

  render() {
    return (
      <>
        <ul className="tabs">
          {this.props.tabs.map(tab => (
            <button
              type="button"
              className="tabs__tab"
              key={tab.title}
              onClick={this.changeTab}
            >
              {tab.title}
            </button>
          ))}
        </ul>
        <p>{this.state.content}</p>
      </>

    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};

export default Tabs;
