import React from 'react';
import { TabShape } from '../Shape/TabShape';

export const Tab = ({ tab, onChange }) => (
  <li>
    <button
      className="ui primary button"
      type="button"
      onClick={() => onChange(tab)}
    >
      {tab.title}
    </button>
  </li>
);

Tab.propTypes = TabShape;
