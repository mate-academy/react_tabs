import React from 'react';

export function Tabs({ NewTabs, onTabSelected }) {
  return (
    NewTabs.map(tab => (
      <button
        key={tab.id}
        type="button"
        onClick={() => {
          onTabSelected(tab.id);
        }}
      >
        {tab.title}
      </button>
    ))
  );
}
