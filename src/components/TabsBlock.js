import React from 'react';
import PropTypes from 'prop-types';
import TabsBlockContext from '../TabsBlockContext';

const TabsBlock = ({ children }) => (
  <TabsBlockContext.Consumer>
    {value => (
      <div>
        <ul className="Tabs__list">
          {children}
        </ul>

        <div
          className="Tabs-content"
        >
          {value}
        </div>
      </div>
    )}
  </TabsBlockContext.Consumer>
);

TabsBlock.Tab = ({
  onTabSelected, title, id, index,
}) => (
  <li className="Tabs__items">
    <button
      onClick={onTabSelected}
      name={id}
      type="button"
      className={
        index === id ? 'button button--active' : 'button'
      }
      key={id}
    >
      {title}
    </button>
  </li>
);

TabsBlock.propTypes = ({
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
});

TabsBlock.Tab.propTypes = ({
  id: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
});

export default TabsBlock;
