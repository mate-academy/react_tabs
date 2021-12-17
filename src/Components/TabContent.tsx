import React from 'react';

type Props = {
  tab: Tab | undefined,
};

export const TabContent: React.FC<Props> = ({ tab }) => {
  return (
    <div className="tab__content">
      {tab
        ? tab.content
        : 'No contend available'}
    </div>
  );
};
