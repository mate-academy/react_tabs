import React from 'react';
import '../Tab/Tab.css';

const Tab = ({onTabSelected, user, index}) => (
  <>
    <li
      className="tab__item"
      key={index}
      onClick={() => {
        onTabSelected(user.content);
      }}
    >
      {user.title}
    </li>
  </>
);

export default Tab;
