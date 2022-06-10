import React from 'react';

export interface Props {
  arrTabs: Tab[],
  selTabId: string,
  onChangeButton: (id: string) => void,
}

export const Tabs: React.FC<Props> = ({
  arrTabs,
  selTabId,
  onChangeButton,
}) => {
  const content = arrTabs.find(tab => tab.id === selTabId)?.content;

  return (
    <div className="Tabs">
      <div className="notification level center">
        {arrTabs.map(item => (
          <React.Fragment key={item.id}>
            <button
              className="button is-primary m-2"
              type="button"
              onClick={() => {
                onChangeButton(item.id);
              }}
            >
              {item.title}
            </button>
          </React.Fragment>
        ))}
      </div>
      <p className="box title is-4" data-cy="tab-content">
        {content}
      </p>
    </div>
  );
};
