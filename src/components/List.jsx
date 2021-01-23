import React from 'react';

class List extends React.Component {

  render () {
    const {
      tabs,
      onTabSelected,
    } = this.props;
    return (
      <ul className="Tab__list List">
        {tabs.map((tab) => (
            <li
              className={`List__item List__item--${tab.index + 1}`}
              key={tab.index}
              onClick={
                onTabSelected
              }
            >
              {tab.title}
            </li>
          )
          )}
      </ul>
    )
  }
}

export default List;
