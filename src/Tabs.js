import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = { index: 0 }

  render() {
    const { tabs } = this.props;

    return (
      <section className="section">
        {tabs.map((item, i) => (
          <button
            type="button"
            className={
              (i === this.state.index
                ? 'section__button activ' : 'section__button')}
            onClick={() => this.setState({ index: i })}
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

Tabs.propTypes = { tabs: PropTypes.objectOf.isRequired };

export default Tabs;
