import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
      props: PropTypes.shape({
        title: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
      }),
    })).isRequired,
  };

  state = {
    index: 0,
  };

  onTabSelected = (index) => {
    this.setState({ index });
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
                onClick={this.onTabSelected.bind(this, index)}
                className={index === this.state.index
                  ? 'nav-link active'
                  : 'nav-link'}
              >
                {tab.props.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content">{children[this.state.index]}</div>
      </div>
    );
  }
}

export default Tabs;
