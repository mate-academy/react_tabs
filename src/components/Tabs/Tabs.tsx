import cn from 'classnames';

export interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: Props) => {
  let index = tabs
    .findIndex(tab => tab.id === selectedTabId);

  index = index !== -1
    ? index
    : 0;

  const onSwitchTab = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    tab: Tab,
    isSelected: boolean,
  ) => {
    e.preventDefault();
    if (!isSelected) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, i) => {
            const isSelected = index === i;

            return (
              <li
                key={tab.id}
                className={cn({ 'is-active': isSelected })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={e => onSwitchTab(e, tab, isSelected)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        id={selectedTabId}
        className="block"
        data-cy="TabContent"
      >
        {tabs[index].content}
      </div>
    </div>
  );
};
