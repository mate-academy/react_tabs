import React from 'react';

export interface Props {
  arrTabs: Tab[],
  selTabId: string,
  selContent: string,
  onChangeButton: (id: string) => void,
  onChangeContent: (content: string) => void,
}

export const Tabs: React.FC<Props> = ({
  arrTabs,
  selTabId,
  selContent,
  onChangeButton,
  onChangeContent,
}) => (
  <div className="Tabs">
    <h1 className="box title">
      Selected tab is&nbsp;
      {arrTabs.find(tab => tab.id === selTabId)?.title}
    </h1>
    <div className="notification level center">
      {arrTabs.map(item => (
        <React.Fragment key={item.id}>
          <button
            className="button is-primary m-2"
            type="button"
            onClick={() => {
              onChangeButton(item.id);
              onChangeContent(item.content);
            }}
          >
            {item.title}
          </button>
        </React.Fragment>
      ))}
    </div>
    <p
      className="box title is-4"
      data-cy="tab-content"
    >
      {selContent}
    </p>
  </div>
);
