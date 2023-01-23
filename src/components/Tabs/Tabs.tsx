import cn from 'classnames';

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Props {
  tabs: Tab[]
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <>
    {tabs.map(tab => {
      return (
        <li
          key={tab.id}
          data-cy="Tab"
          className={cn(
            { 'is-active': selectedTabId === tab.id },
          )}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => {
              if (selectedTabId !== tab.id) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </a>
        </li>
      );
    })}
  </>
);
