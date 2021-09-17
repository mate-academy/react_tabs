import React, { useState } from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (id: string) => void;
};

export const Tabs : React.FC<Props> = (props) => {
  const { tabs, onTabSelected, selectedTabId } = props;
  const [content, setContent] = useState(tabs[0].content);
  const [focus, setFocus] = useState(true);

  return (
    <>
      <div className="Tabs row">
        <button
          type="button"
          id={tabs[0].id}
          className="Tabs__button"
          style={focus ? {
            borderBottom: 'none',
            color: 'black',
          } : {
            borderBottom: '1px solid black',
            color: 'rgb(60, 104, 143)',
          }}
          onClick={() => {
            onTabSelected(selectedTabId);
            setContent(tabs[0].content);
            setFocus(true);
          }}
        >
          {tabs[0].title}
        </button>
        {tabs.filter(tab => tab.id !== tabs[0].id).map(tab => (
          <div key={tab.id}>
            <button
              type="button"
              id={tab.id}
              className="Tabs__button"
              onClick={() => {
                onTabSelected(selectedTabId);
                setContent(tab.content);
                setFocus(false);
              }}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>

      <div>
        <p className="lead">
          {content}
        </p>
      </div>
    </>
  );
};
