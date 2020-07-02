import React from 'react';
import Shapes from '../Shape';

export default class Tab extends React.Component {
  clickTab = () => {
    this.props.onClickTab(this.props.tab);
  };

  render() {
    return (
      <button
        type="button"
        onClick={this.clickTab}
        className="tab"
      >
        {this.props.tab.title}
      </button>
    );
  }
}

Tab.propTypes = Shapes.ShapeTab.isRequired;
