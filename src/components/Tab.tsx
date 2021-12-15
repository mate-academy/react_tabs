import React from 'react';

type Props = {
  tab: Tab,
  onTabSelected: (selectedTab: Tab) => void,
};

export const Tab: React.FC<Props> = ({
  tab,
  onTabSelected,
}) => (
  <>
    <a
      className="Tab__link"
      href="/"
      onClick={(event) => {
        event.preventDefault();

        onTabSelected(tab);
      }}
    >
      {tab.title}
    </a>
  </>
);
