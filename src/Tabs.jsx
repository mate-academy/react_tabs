import React from 'react';
import './Tabs.scss';
import propTypes from 'prop-types';

class Tabs extends React.PureComponent {
  render() {
    const { tabs, selectedTab, onChange } = this.props;

    return (
      <>
        <ul className="listOfTabs">
          { tabs.map(
            tab => (
              <li key={tab.id}>
                <button
                  type="button"
                  onClick={() => onChange(tab.id)}
                >
                  { tab.title }
                </button>
              </li>
            ),
          ) }
        </ul>
        <div>
          { selectedTab.content }
        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      content: propTypes.string.isRequired,
    }),
  ).isRequired,

  selectedTab: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
  }).isRequired,

  onChange: propTypes.func.isRequired,
};

export default Tabs;
