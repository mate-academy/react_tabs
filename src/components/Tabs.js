import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = { index: 0 };

  onTabSelected(index) {
    this.setState({ index });
  }

  render() {
    const { index } = this.state;
    const { tabs } = this.props;

    return (
      <article className="article">
        <ul className="tabs">
          {tabs.map((tab, i) => (
            <li key={tab.title}>
              <button
                type="button"
                className={(i === index
                  ? 'tabs__tab--active'
                  : 'tabs__tab--unactive')}
                onClick={() => this.onTabSelected(i)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>

        <pre className="article__p">{tabs[index].content}</pre>
      </article>
    );
  }
}

Tabs.propTypes = { tabs: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Tabs;
