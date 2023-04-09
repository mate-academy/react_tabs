import cn from 'classnames';

import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    selectedTabId,
    tabs,
    onTabSelected,
  } = props;

  const currentTab = tabs
    .find(tab => tab.id === selectedTabId) || tabs[0];

  function handleSelectTab(tab: Tab) {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => {
              const { id, title } = tab;

              return (
                <li
                  data-cy="Tab"
                  key={id}
                  className={cn({
                    'is-active': id === currentTab.id,
                  })}
                >
                  <a
                    href={`#${id}`}
                    data-cy="TabLink"
                    onClick={() => {
                      handleSelectTab(tab);
                    }}
                  >
                    {title}
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
