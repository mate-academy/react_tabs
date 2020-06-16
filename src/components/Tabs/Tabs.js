import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

class Tabs extends React.PureComponent {
  state = {
    content: this.props.children[0].props.children || '',
  }

  changeContent = (anotherContent) => {
    this.setState({
      content: anotherContent,
    });
  }

  render() {
    const tabs = [...this.props.children];

    return (
      <div className="tabs">
        <div className="tabs__buttons">
          {
            tabs.map(tab => ({
              ...tab,
              props: {
                ...tab.props,
                changeContent: this.changeContent,
              },
            }))
          }
        </div>
        <p>{this.state.content}</p>
      </div>
    );
  }
}

export { Tabs };

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
