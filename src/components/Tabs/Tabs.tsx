import React from 'react';

interface TabsType {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: TabsType[],
  selectedTabsId: string,
  onTabSelected: React.MouseEventHandler<HTMLAnchorElement>,
};

export const Tabs: React.FC<Props> = React.memo(({
  tabs,
  selectedTabsId,
  onTabSelected,
}) => (
  <>
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(({ id, title }) => (
          <li
            key={id}
            className={id === selectedTabsId ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              href={`#${id}`}
              data-cy="TabLink"
              onClick={onTabSelected}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.find(tab => tab.id === selectedTabsId)?.content}
    </div>
  </>
));
