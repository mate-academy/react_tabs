import React, { Component } from 'react';
import './Tabs.css';

const article = `Lorem ipsum dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod tempor incididunt ut labore
  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
  sint occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum.`;

const shortArticle = `Lorem ipsum dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod tempor incididunt ut labore
  etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi`;

const email = `Vadim@animevost.org`;

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSwitcher: 0,
    };

    this.tabs = [
      { title: 'Home', content: <p>{article}</p> },
      {
        title: 'Profile',
        content: [<div>{shortArticle}</div>,
          <div>{shortArticle}</div>],
      },
      { title: 'Contact', content: <h1>{email}</h1> },
    ];
  }

  switchTabs = (i) => {
    this.setState(() => ({
      tabSwitcher: i,
    }));
  }

  render() {
    return (
      <section className="tabs">
        <div className="tabs__switchers">
          {this.tabs.map((tab, index) => (
            <button
              type="button"
              className={this.state.tabSwitcher === index
                ? `tabs__button tabs__button_active`
                : `tabs__button`}
              onClick={() => this.switchTabs(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        {this.tabs.map((tab, index) => (
          <article className={this.state.tabSwitcher === index
            ? 'tabs__item show'
            : 'tabs__item'}
          >
            {tab.content}
          </article>
        ))}
      </section>
    );
  }
}

export default Tabs;
