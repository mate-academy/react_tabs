import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  state = { index: 0 }

  render() {
    const { tabs } = this.props;

    return (
      <div className="button_text">
        {tabs.map((item, i) => (
          <button
            key={item.title}
            type="button"
            className={i === this.state.index ? 'select' : 'no_select'}
            onClick={() => {
              this.setState(
                { index: i }
              );
            }}
          >
            {item.title}
          </button>
        ))}

        <p>{tabs[this.state.index].content}</p>
      </div>
    );
  }
}

Tabs.propTypes = { tabs: PropTypes.arrayOf(PropTypes.object).isRequired };
export default Tabs;
