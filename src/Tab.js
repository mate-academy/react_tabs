import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  state = { selectedIndex: 0 };

  render() {
    const { tabs } = this.props;
    const { selectedIndex } = this.state;

    return (
      <section className="tabs">
        { tabs.map((item, i) => (
          <button
            type="button"
            onClick={() => {
              this.setState({ selectedIndex: i });
            }}
            className={i === selectedIndex
              ? 'tabs__button tabs__bottom--active'
              : 'tabs__button'}
            key={item.title}
          >
            {item.title}
          </button>
        ))}
        <article className="tabs__content">
          {tabs[selectedIndex].content}
        </article>
      </section>
    );
  }
}

Tab.propTypes = { tabs: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Tab;
