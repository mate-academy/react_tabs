import classNames from 'classnames';

type Tab = {
  id: string;
  title: string;
  content: string;
};

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs, selectedTabId, onTabSelected,
}) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={classNames({ 'is-active': selectedTabId === tab.id })}
          >
            <a
              href={`#${tab.id}`}
              onClick={() => onTabSelected(tab)}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
