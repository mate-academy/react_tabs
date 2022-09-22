import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  value: Tab;
  onChange:(tab:Tab) => void;
}

export const Tabs = ({ tabs, value, onChange }:Props) => {
  const tabSelection = (tab: Tab) => {
    if (value.id !== tab.id) {
      return tab;
    }

    return value;
  };

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={value.id === tab.id ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => onChange(tabSelection(tab))}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
