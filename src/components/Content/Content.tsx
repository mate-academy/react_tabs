import React from 'react';

type Tab = {
  id: string;
  title: string;
  content: string;
};

interface Props {
  selectedTab: Tab;
}

export const Content: React.FC<Props> = ({ selectedTab }) => {
  return (
    <div
      className="block"
      data-cy="TabContent"
    >
      {selectedTab.content}
    </div>
  );
};
