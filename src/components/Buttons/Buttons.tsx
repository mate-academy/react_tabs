import React from 'react';
import './Buttons.scss';

type Props = {
  tabs: Tab[]
};

export const Buttons: React.FC<Props> = ({ tabs }) => (
  <div className="App__buttons">
    {
      tabs.map(tab => (
        <button key={tab.id} type="button">
          {tab.title}
        </button>
      ))
    }
  </div>
);
