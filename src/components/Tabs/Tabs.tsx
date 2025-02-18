import { Tab } from '../../App';

type Props = {
  tabs: Tab[];
  selectedTab: string;
  setTab: (id: string) => void;
};

export const Tabs = ({ tabs, selectedTab, setTab }: Props) => {
  return (
    <ul>
      {' '}
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={`${selectedTab === tab.id && 'is-active'}`}
          data-cy="Tab"
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => setTab(tab.id)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
