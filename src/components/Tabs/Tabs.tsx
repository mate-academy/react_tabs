import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectTab: React.Dispatch<React.SetStateAction<Tab>>;
  selected: Tab;
};

export const Tabs: React.FC<Props> = ({ tabs, selectTab, selected }) => {
  return (
    <ul>
      {tabs.map((tab) => (
        <li
          className={classNames(
            { 'is-active': tab.id === selected.id },
          )}
          data-cy="Tab"
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => selectTab(tab)}
          >
            { tab.title }
          </a>
        </li>
      ))}
    </ul>
  );
};
