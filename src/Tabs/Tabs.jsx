import React from 'react';

export const Tabs = ({ tabs, selected, onChange }) => {
    const chosenTab = tabs.find(tab => tab.id === selected);

    return (
      <div>
        <ul className="nav nav-tabs">
          {
            tabs.map( tab=> (
            <li
              className={`nav-item nav-link ${tab.id === selected && 'active font-weight-bold'}`}
              onClick={()=>onChange(tab)}
            >
              {tab.title}
            </li>
            ))
          }
        </ul>
        <p className="card-body">{chosenTab.content}</p>
      </div>
    )
}
