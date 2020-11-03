import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, selected, onChange }) => {
    const chosenTab = tabs.find(tab => tab.id === selected);

    return (
      <div>
        <ul className="nav nav-tabs">
          {
            tabs.map( tab=> (
            <li
              className={classNames(`nav-item nav-link`, {
                'active font-weight-bold': tab.id === selected,
              })}
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
