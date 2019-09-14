import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })).isRequired,
  };

  state = {
    index: `0`,
  };

  onTabSelected = (index) => {
    this.setState(prevState => ({ index: index || prevState.index }));
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <ul className="nav">
          {children.map((tab, index) => (
            <li className="nav-item" key={index.toString()}>
              <button
                type="button"
                onClick={this.onTabSelected.bind(this, `${index}`)}
                className={`${index}` === this.state.index
                  ? 'nav-link active'
                  : 'nav-link'}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {children.map((tab, index) => (
            <div
              key={index.toString()}
              className={`${index}` === this.state.index
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
