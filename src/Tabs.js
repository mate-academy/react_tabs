import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = { index: 0 }

  render() {
    const { tabs } = this.props;
    const { index } = this.state;

    return (
      <section className="section">
        {tabs.map((item, i) => (
          <button
            key={item.title}
            type="button"
            className={
              (i === index
                ? 'section__button section__button--is-active'
                : 'section__button')}
            onClick={() => {
              this.setState({ index: i });
            }}
          >
            {item.title}
          </button>
        ))
        }
        <hr className="section__decor" />
        <p className="section__text">
          {tabs[this.state.index].content}
        </p>
      </section>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Tabs;
