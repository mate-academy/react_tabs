import React from 'react';
import classNames from 'classnames';
import './TitleList.css';
import { TitleListProps } from '../../props/TitleListProps';

export const TitleList = ({ index, tabs, onTabSelected }) => (
  <ul className="nav nav-tabs mb-3">
    {tabs.map(({ title, id }) => (
      <li className="nav-item" key={id}>
        <button
          type="button"
          className={classNames('nav-link', 'button', {
            active: index === id,
          })}
          onClick={() => onTabSelected(id)}
        >
          {title}
        </button>
      </li>
    ))}
  </ul>
);

TitleList.propTypes = TitleListProps;
