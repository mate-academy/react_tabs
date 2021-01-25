import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.PureComponent {
  state = {
    activeTitle: 'Tab 1',
  }

  changeHandler = (title) => {
    this.setState({ activeTitle: title });
  }

  render() {
    const { activeTitle } = this.state;
    const { tabs } = this.props;
    const activeText = tabs.find(el => el.title === activeTitle);

    return (
      <div>
        <div>
          {tabs.map(el => (
            <button
              type="button"
              key={el.title}
              onClick={() => {
                this.changeHandler(el.title);
              }}
            >
              {el.title}
            </button>
          ))}
        </div>

        <p>
          {activeText.content}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(
    PropTypes.string.isRequired,
  )).isRequired,
};
