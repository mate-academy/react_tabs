import React from 'react';

const Tab = (props) => {
  const { tab, active, event } = props;
  const { title, id } = tab;

  const classList = id === active
    ? `tab__item tab__active`
    : `tab__item`;

  const classForLink = id === active
    ? `tab__link--active tab__link`
    : `tab__lind--disabled tab__link`;

  return (
    <li className={classList} id={id} onClick={() => event(tab)}>
      <a href="#" className={classForLink}>
        {title}
      </a>
    </li>
  );
}

export default Tab;
