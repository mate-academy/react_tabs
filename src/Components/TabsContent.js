import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

export default class TabsContent extends Component {
  constructor({tabs}) {
    super();
    this.tabs = tabs;
    this.state = {tabIndex: 0};

    this.activeContent = (index) => {
      this.setState({tabIndex: index});
    };
  }

  render() {
    const {tabIndex} = this.state;

    return (
      <>
        <ul className="list-group list-group-horizontal container">
          {this.tabs.map((tab, i) => (
            <li className="list-group-item" key={tab.title}>
              <Tab
                title={tab.title}
                index={i}
                handlerClick={() => this.activeContent(i)}
              />
            </li>
          ))}
        </ul>
        <ul>
          <li className="jumbotron jumbotron-fluid">
            <div className="container">
              {' '}
              <p className="lead">{this.tabs[tabIndex].content}</p>

              {' '}
            </div>
          </li>
        </ul>
      </>
    );
  }
}

TabsContent.propTypes = {
  tabs: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,

  ]).isRequired,
};
