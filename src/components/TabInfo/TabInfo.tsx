import cn from 'classnames';

import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
  currentTabId: string;
  onTabSelect: (tab: Tab) => void;
};

export const TabInfo: React.FC<Props> = (
  { currentTabId, tab, onTabSelect },
) => {
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      key={id}
      className={cn({ 'is-active': id === currentTabId })}
    >
      <a
        href={`#${id}`}
        data-cy="TabLink"
        onClick={() => {
          onTabSelect(tab);
        }}
      >
        {title}
      </a>
    </li>
  );
};
