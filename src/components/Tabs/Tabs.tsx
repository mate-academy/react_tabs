import classNames from 'classnames';

interface Tab {
  id: string
  title: string
  content: string
}

type Props = {
  tab: Tab;
  id: string;
  onTabSelect: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tab, id, onTabSelect }) => {
  return (
    <li
      className={classNames({ 'is-active': tab.id === id })}
      data-cy="Tab"
      key={tab.id}
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => {
          if (tab.id !== id) {
            onTabSelect(tab);
          }
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};
