import React from 'react';
import Proptypes from 'prop-types';

export function Tab({ id, content, title, onTabSelected }) {
  return (
    <>
      <button
        onClick={() => onTabSelected(id, content)}
        type="button"
      >
        {title}
      </button>
    </>
  );
}

Tab.propTypes = {
  onTabSelected: Proptypes.func.isRequired,
  id: Proptypes.number.isRequired,
  content: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
};
