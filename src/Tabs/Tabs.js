import React from 'react';
import './Tabs.css';

class Tabs extends React.Component {
  state = {
    index: `0`,
  };

  onTabSelected = (index) => {
    this.setState(prevState => ({ index: index || prevState.index }));
  };

  render() {
    const self = this;

    return (
      <div>
        <ul className="nav">
          {self.props.children.map((tab, index) => (
            <li className="nav-item" key={index.toString()}>
              <button
                type="button"
                onClick={self.onTabSelected.bind(this, `${index}`)}
                className={`${index}` === self.state.index
                  ? 'nav-link active'
                  : 'nav-link'}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {self.props.children.map((tab, index) => (
            <div
              key={index.toString()}
              className={`${index}` === self.state.index
                ? 'tab-pane active'
                : 'tab-pane'}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Tabs;
