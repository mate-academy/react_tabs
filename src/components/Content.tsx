import React from 'react';

type Props = {
  selectedTab: string;
  tabButtons: Tab[];
};

export const Content: React.FC<Props> = (props) => {
  const { selectedTab, tabButtons } = props;

  const currentTab: Tab | undefined = tabButtons.find(tab => tab.id === selectedTab);

  return (
    <>
      {currentTab === undefined ? '' : currentTab.content}
    </>
  );
};
