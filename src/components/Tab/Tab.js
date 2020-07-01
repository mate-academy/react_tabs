import React from 'react';
import { validTitle, validCallback } from '../../propValidation';
import './Tab.css';

export function Tab({ name, callback }) {
  return (
    <button
      type="button"
      className="tab"
      onClick={callback}
    >
      {name}
    </button>
  );
}

Tab.propTypes = {
  name: validTitle.isRequired,
  callback: validCallback.isRequired,
};
