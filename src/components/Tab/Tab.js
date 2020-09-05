import React from 'react';
import './Tab.css';
import { TabShape } from '../../Shape';

export class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
  }

  changeIndex = (index) => {
    this.setState({ tabIndex: index });
  }

  render() {
    const { tabs } = this.props;

    return (
      <>
        {tabs.map((tab, index) => (
          <button
            className="button"
            type="button"
            onClick={() => this.changeIndex(index)}
            key={tab.title}
          >
            {tab.title}
          </button>
        ))}
        <div className="line" />
        <p>{tabs[this.state.tabIndex].content}</p>
      </>
    );
  }
}

Tab.propTypes = TabShape.isRequired;
