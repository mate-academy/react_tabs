import './Tabs.scss';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab)=> void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <nav>
      {tabs.map(tab => (
        <button
          className={tab.id === selectedTabId ? 'tab--selected' : 'tab'}
          type="button"
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      ))}
    </nav>
  );
};
