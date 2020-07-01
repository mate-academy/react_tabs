import React from 'react';
import { Tab } from '../Tab/Tab';
import { validTab, validCallback } from '../../propValidation';
import './Tabs.css';

export function Tabs({ tabs, callback }) {
  return (
    <ul className="tabs">
      {tabs.map(tab => (
        <li className="tabs__item" key={tab.title}>
          <Tab name={tab.title} callback={() => callback(tab.content)} />
        </li>
      ))}
    </ul>
  );
}

Tabs.propTypes = {
  tabs: validTab.isRequired,
  callback: validCallback.isRequired,
};
