import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  selectedOnTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  selectedOnTab,
}) => {
  const selectedTab = tabs.find(({ id }) => id === selectedTabId || tabs[0]);

  function handleOnClick(tab: Tab): void | '' {
    return (tab.id !== selectedTabId
      ? selectedOnTab(tab)
      : ''
    );
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          // maped tabs
        </ul>
      </div>

      <div className="block" data-ce="TabContent">
        {selectedTab?.content}
      </div>
    </div>
  );
};
