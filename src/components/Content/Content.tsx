import React from 'react';

interface Props {
  selectedTabContent: string;
}

export const Content: React.FC<Props> = ({ selectedTabContent }) => {
  return (
    <div
      className="block"
      data-cy="TabContent"
    >
      {selectedTabContent}
    </div>
  );
};
