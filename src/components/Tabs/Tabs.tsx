import cn from 'classnames';
import { Dispatch } from 'react';

interface TabsInterface {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: TabsInterface[]
  selectedTab: TabsInterface
  onSelect: Dispatch<TabsInterface>
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onSelect,
}) => (
  <div>
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={
              cn({
                'is-active': tab === selectedTab,
              })
            }
          >
            <a
              href={`#${selectedTab.id}`}
              onClick={() => {
                onSelect(tab);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div
      className="block"
      data-cy="tab-content"
    >
      {selectedTab.content}
    </div>
  </div>
);
