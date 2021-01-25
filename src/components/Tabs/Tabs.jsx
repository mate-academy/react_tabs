import React from 'react';

export const Tabs = ({ tabs, onClick }) => (
  tabs.map(tab => (
    <button
      className="btn btn-primary"
      key={tab.id}
      type="button"
      onClick={() => {
        onClick(tab.id);
      }}
    >
      {tab.title}
    </button>
  ))
);
