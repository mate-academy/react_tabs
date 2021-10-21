import React from 'react';
import classNames from 'classnames';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  hangeTable: (tab: string) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  hangeTable,
}) => {
  return (
    <>
      {tabs.map(tab => {
        const { id, title } = tab;

        return (
          <button
            key={id}
            type="button"
            className={classNames(
              'tab',
              { 'tab-active': id === selectedTabId },
            )}
            onClick={() => hangeTable(id)}
          >
            {title}
          </button>
        );
      })}
    </>
  );
};
