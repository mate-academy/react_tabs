import React from 'react';
import './Tabs.scss';
import classname from 'classnames';

interface Prop {
  tabs:Tab[],
  content: string,
  setContent: (content:string) => void;
}

export const Tabs:React.FC<Prop> = ({ tabs, content, setContent }) => {
  return (
    <>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            className={classname('button',
              { 'button chose': content === tab.content })}
            type="button"
            key={tab.id}
            onClick={() => setContent(tab.content)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <p
        data-cy="tab-content"
        className="title"
      >
        {content}
      </p>
    </>
  );
};
