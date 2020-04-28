import React from 'react';
import './App.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

const App = () => (
  <Tabs tabs={tabs} />
);

class Tabs extends React.Component {
  state = {
    activeIndex: 0,
  }

  render() {
    return (
      <section className="section">
        {this.props.tabs.map((tab, index) => (
          <button
            type="button"
            key={tab.title}
            className={classNames(
              { button__active: index === this.state.activeIndex },
            )}
            onClick={() => this.setState(
              { activeIndex: index },
            )
            }
          >
            {tab.title}
          </button>
        ))}
        <p className="section__text">
          {tabs[this.state.activeIndex].content}
        </p>
      </section>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default App;
