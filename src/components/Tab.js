import React from 'react';
import PropTypes from 'prop-types';

export class Tab extends React.Component {
  state = {
    tabIndex: 0,
  }

  changeIndex = (index) => {
    this.setState({ tabIndex: index });
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
              onClick={() => {
                this.changeIndex(index);
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
