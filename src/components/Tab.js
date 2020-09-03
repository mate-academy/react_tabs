import React from 'react';
import PropTypes from 'prop-types';

export class Tab extends React.Component {
  state = {
    tabIndex: 0,
  }

  changeIndex = (event, index) => {
    if (event.keyCode === 9) {
      this.setState({ tabIndex: index < 2 ? index + 1 : 0 });
    }
  }

  render() {
    const { tabs } = this.props;

    return (
      <>
        {tabs.map((tab, index) => (
          <>
            <button
              className="button"
              type="button"
              onKeyDown={(event) => {
                this.changeIndex(event, index);
              }}
              key={tab.title}
            >
              {tab.title}
            </button>
          </>
        ))}
        <p className="line" />
        <div>{tabs[(this.state.tabIndex)].content}</div>
      </>
    );
  }
}

Tab.propTypes = {
  tabs: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};
